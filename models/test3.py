from PIL import Image
import torch
import numpy as np
from transformers import CLIPModel, CLIPTokenizer

# Load the model
model_name = "TonyStarkD99/CLIP-Crop_Disease-Large"
model = CLIPModel.from_pretrained(model_name)

# Load your image
image_path = "/home/overnion/Status200/tomato.png"  # Replace with your image path
image = Image.open(image_path)

# Define the class labels (text prompts)
class_labels = [
    "healthy plant",
    "powdery mildew",
    "leaf rust",
    "stem rust",
    "fusarium head blight",
    "gray leaf spot",
    "bacterial blight",
    "downy mildew",
    "aphid infestation",
    "white mold",
    "black rot",
    "root rot",
    "yellow leaf curl",
    "blight",
    "necrotic spots",
    "chlorosis",
    "wilt",
    "damping off",
    "viral infection",
    "pest damage"
]

# Resize and normalize the image
image = image.convert("RGB")  # Ensure the image is in RGB format
image = image.resize((224, 224))  # Resize to the expected input size

# Convert the image to a tensor
image_tensor = torch.tensor(np.array(image)).permute(2, 0, 1).unsqueeze(0)  # Convert to (1, C, H, W)
image_tensor = image_tensor.float() / 255.0  # Normalize to [0, 1]

# Load the tokenizer
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch16")  # Use a compatible tokenizer

# Tokenize the text prompts
text_inputs = tokenizer(class_labels, padding=True, return_tensors="pt")

# Make predictions
with torch.no_grad():
    outputs = model(pixel_values=image_tensor, input_ids=text_inputs['input_ids'])

logits_per_image = outputs.logits_per_image  # This gives the similarity scores
probs = logits_per_image.softmax(dim=1)  # Convert to probabilities

# Get the predicted class
predicted_class_idx = probs.argmax().item()
predicted_class = class_labels[predicted_class_idx]

# Print the predicted class and probabilities
print("Predicted class:", predicted_class)
# print("Probabilities:", probs.detach().numpy())

