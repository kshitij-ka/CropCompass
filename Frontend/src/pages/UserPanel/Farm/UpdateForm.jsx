import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateFarm = () => {
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");
  const [waterContent, setWaterContent] = useState("");
  const [soilType, setSoilType] = useState("");
  const [sizeContent, setSizeContent] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const farmData = {
      name: farmName,
      location,
      waterContent,
      soilType,
      size: sizeContent,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/farm/67b9b3a1b68365aa35ae0e5f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(farmData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to Update the farm");
      }

      setSuccess(true);
      setError(null);
      // navigate to the dashboard:
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <h1 className="w-full text-center text-2xl font-bold my-5">
        Update farm
      </h1>

      <div className="mb-4 flex justify-end space-x-4">
        <form className="max-w-md mx-auto w-80" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="farmName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Farm Name
            </label>
            <input
              type="text"
              id="farmName"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="waterContent"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Water Content
            </label>
            <input
              type="text"
              id="waterContent"
              value={waterContent}
              onChange={(e) => setWaterContent(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="soilType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Soil Type
            </label>
            <input
              type="text"
              id="soilType"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="soilType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Size of Land
            </label>
            <input
              type="text"
              id="soilType"
              value={sizeContent}
              onChange={(e) => setSizeContent(e.target.value)}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Farm
          </button>
          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="mt-4 text-green-500 text-sm">
              Farm Updated successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateFarm;
