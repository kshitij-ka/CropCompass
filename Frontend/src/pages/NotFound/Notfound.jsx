import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-green-600 drop-shadow-lg">
            404
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
            Oops! Page not found
          </h2>
          <p className="mt-2 text-gray-600">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="mt-6">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
            >
              Back to Home
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 text-gray-500 text-sm">
          Plant Disease Prediction App
        </div>
      </div>
    </>
  );
};

export default NotFound;
