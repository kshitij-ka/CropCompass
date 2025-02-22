from PIL import Image, UnidentifiedImageError
from transformers import ViTImageProcessor, ViTForImageClassification

# Load the image processor and model
model_name = 'wambugu71/crop_leaf_diseases_vit'
image_processor = ViTImageProcessor.from_pretrained(model_name)
model = ViTForImageClassification.from_pretrained(
    model_name,
    ignore_mismatched_sizes=True
)

# Load your image
try:
    image = Image.open('/home/overnion/Status200/potato2.png')  # Replace with the actual path to your image
    # Convert the image to RGB if it's not already
    if image.mode != 'RGB':
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

# Prepare the image for the model
inputs = image_processor(images=image, return_tensors="pt")

# Make the prediction
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = logits.argmax(-1).item()

# Print the predicted class
print("Predicted class:", model.config.id2label[predicted_class_idx])

