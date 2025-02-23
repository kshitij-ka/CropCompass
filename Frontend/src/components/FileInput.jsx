import React from 'react'

function FileInput() {

    const handleFileChange= () => {
        const fileInput = document.getElementById("file_input");
        const file = fileInput.files[0];
        if (!file) {
            alert("Please select a file!");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
    
        // Send to backend
        fetch("http://your-backend-url.com/upload", {
        method: "POST",
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => console.log("File uploaded successfully:", data))
        .catch((error) => console.error("Upload failed:", error));
    }

  return (
    <div className=' pt-24'>
        
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
        id="file_input" 
        type="file"
        onChange={handleFileChange} />

    </div>
  )
}

export default FileInput