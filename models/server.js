// server.js
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Endpoint to run the Python script
app.get('/app.py', (req, res) => {
    const imagePath = path.join(__dirname, '/path/to/file'); // Path to your image

    // Spawn a new Python process
    const pythonProcess = spawn('python', ['app.py', imagePath]);

    // Collect data from the script
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
        res.send(data.toString()); // Send the output back to the client
    });

    // Handle errors
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
        res.status(500).send(data.toString());
    });

    // When the process is done
    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

