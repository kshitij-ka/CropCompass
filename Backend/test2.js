import { pipeline } from "@xenova/transformers";
import Jimp from "jimp";

async function main() {
    const modelName = "Xenova/distilbert-base-uncased-finetuned-sst-2-english"; // Example model

    // Load the model
    const classifier = await pipeline("image-classification", modelName);

    // Load the image
    let image;
    try {
        image = await Jimp.read("/home/karan/Downloads/tomato.png");
        image.rgba(true);
    } catch (error) {
        console.error("Error: Unable to open image. Check the file type or path.");
        console.error(error);
        return;
    }

    // Convert image to buffer
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    // Classify the image
    const result = await classifier(buffer);

    console.log("Predicted class:", result);
}

main().catch(console.error);

