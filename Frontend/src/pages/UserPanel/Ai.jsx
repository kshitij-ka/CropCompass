import React, { useState } from "react";
import Navbar2 from "../../components/Navbar2";

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

      const response = await fetch(
        `${process.env.REACT_APP_MODEL_URI}/predict`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const result = await response.json();
      setPrediction(result.data || "No prediction returned");
    } catch (err) {
      console.error("Error during prediction:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-white to-green-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Plant Disease Prediction
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 text-gray-400 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16a4 4 0 118 0M12 12v9m0-9l3.5-3.5M12 12L8.5 8.5" />
                </svg>
                <p className="text-sm text-gray-600">
                  {selectedFile
                    ? selectedFile.name
                    : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              disabled={loading || !selectedFile}
              className="w-full py-3 bg-gradient-to-r from-green-300 to-green-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
          )}

          {prediction && (
            <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">
                Prediction:
              </h3>
              <p className="text-gray-800 mt-1">{prediction}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Ai;
