# For executing: python3 app.py /path/to/file
# Import libraries
from PIL import Image, UnidentifiedImageError
from transformers import ViTImageProcessor, ViTForImageClassification
import sys

# Specify the local directory where the model files are stored
#local_model_path = './pretrained'

# Check if the image path is provided
if len(sys.argv) < 2:
    print("Error: No image path provided. Please provide the path to the image as an argument.")
    exit()

# Load the image processor and model
model_name = 'vishnun0027/Crop_Disease_model_1'
image_processor = ViTImageProcessor.from_pretrained(model_name)
model = ViTForImageClassification.from_pretrained(
    model_name,
    ignore_mismatched_sizes=True
)

# Load image
image_path = sys.argv[1]  # Get the image path from command line arguments
try:
    image = Image.open(image_path)
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

# Preparing the image for the model
inputs = image_processor(images=image, return_tensors="pt")

# Make the prediction
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = logits.argmax(-1).item()

# Print the predicted class
print(model.config.id2label[predicted_class_idx])
