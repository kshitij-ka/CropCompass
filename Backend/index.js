const server = require("./app.js");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const DB_connect = require("./Database/DB_connect.js");
const app = require("./app.js");

// dotenv Configuration
dotenv.config({
  path: "./.env",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

DB_connect();

// Listening the port
app.listen(process.env.PORT, () => {
  console.log("Server is Running on ", process.env.PORT);
  console.log("Frontend URI : ", process.env.FRONTEND_URI);
});
