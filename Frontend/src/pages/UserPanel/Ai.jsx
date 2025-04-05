import React, { useState } from "react";

const Ai = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setPrediction("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const result = await response.json();
      // Assuming the API returns a JSON object with an "output" field.
      setPrediction(result.data || "No prediction returned");
    } catch (err) {
      console.error("Error during prediction:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Plant disease prediction
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
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      {prediction && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="text-lg font-semibold">Prediction:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
