// server.js
const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const upload = require("./Middleware/multer");
const cors = require("cors");

const app = express();
const PORT = 8081;

const corsOptions = {
  origin: "${FRONTEND_URI}",
  methods: "POST",
  credentials: true,
};
//methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

app.use(cors(corsOptions));

// Endpoint to run the Python script
app.post("/predict", upload.single("image"), (req, res) => {
  console.log("File is uploaded successfully " + req.file?.path);
  // const imagePath = path.join(__dirname, req.file?.path); // Path to your image

  const imagePath = req.file?.path;

  console.log("Image Path is : ", imagePath);

  // Spawn a new Python process
  const pythonProcess = spawn("python3", ["app.py", imagePath]);

  // Collect data from the script
  pythonProcess.stdout.on("data", (data) => {
    console.log(`Output: ${data}`);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: data.toString(),
    });
    //res.send(data.toString()); // Send the output back to the client
  });

  // Handle errors
  pythonProcess.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
    res.status(500).send(data.toString());
  });

  // When the process is done
  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
