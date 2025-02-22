const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const responce = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("File is uploaded successfully");
    fs.unlinkSync(localFilePath, () => {
      console.log("file removed successfully");
    });
    return responce.url;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("file removed successfully");
    return null;
  }
};
module.exports = { uploadOnCloudinary };
