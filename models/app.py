# Import libraries
from PIL import Image, UnidentifiedImageError
from transformers import ViTImageProcessor, ViTForImageClassification

# Specify the local directory where the model files are stored
local_model_path = '/home/overnion/Status200/models/pretrained'

# Load the image processor and model from the local directory
image_processor = ViTImageProcessor.from_pretrained(local_model_path)
model = ViTForImageClassification.from_pretrained(
    local_model_path,
    ignore_mismatched_sizes=True
)

# Load image
try:
    image = Image.open('/home/overnion/Status200/models/samples/apple.png')
    # Convert the image to RGB if it's not already
    if (image.mode != 'RGB'):
        image = image.convert('RGB')
except FileNotFoundError:
    print("Error: Image file not found.")
    exit()
except UnidentifiedImageError:
    print("Error: Unable to open image. Check the file type.")
    exit()
except Exception as e:
    print(f"An error occurred: {e}")
    exit()

# Preparing the image for the model
inputs = image_processor(images=image, return_tensors="pt")

# Make the prediction
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = logits.argmax(-1).item()

# Print the predicted class
print("Predicted class:", model.config.id2label[predicted_class_idx])

