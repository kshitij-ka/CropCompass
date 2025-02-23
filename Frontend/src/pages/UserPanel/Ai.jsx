import React, { useState } from "react";
import Loader from "../../components/Loader";

const Ai = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setResult("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      // Update the URL if needed.
      const response = await fetch("http://localhost:8000/api/v1/vegetable", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to classify image");
      }

      const data = await response.json();
      // Assume the API returns an object with an "output" field.
      setResult(data.output || "No result provided");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Vegetable Classifier
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
        />
        <button
          type="submit"
          disabled={loading || !selectedFile}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? <Loader> </Loader> : "Upload and Classify"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
