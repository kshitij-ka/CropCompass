// npm install @huggingface/huggingface jimp

const fs = require('fs');
const { ImageProcessor, Model } = require('@huggingface/huggingface');
const Jimp = require('jimp'); // For image processing

async function main() {
    const modelName = 'vishnun0027/Crop_Disease_model_1';

    // Load the image processor and model
    const imageProcessor = await ImageProcessor.fromPretrained(modelName);
    const model = await Model.fromPretrained(modelName);

    // Load your image
    let image;
    try {
        image = await Jimp.read('/home/overnion/Status200/tomato.png'); // Replace with the actual path to your image
        // Convert the image to RGB if it's not already
        if (image.bitmap.colorType !== 2) { // 2 means RGB
            image = image.colorType(2);
        }
    } catch (error) {
        console.error("Error: Unable to open image. Check the file type or path.");
        console.error(error);
        return;
    }

    // Prepare the image for the model
    const inputs = imageProcessor(images: image, returnTensors: "pt");

    // Make the prediction
    const outputs = await model(inputs);
    const logits = outputs.logits;
    const predictedClassIdx = logits.argMax(-1).dataSync()[0];

    // Print the predicted class
    console.log("Predicted class:", model.config.id2label[predictedClassIdx]);
}

main().catch(console.error);
