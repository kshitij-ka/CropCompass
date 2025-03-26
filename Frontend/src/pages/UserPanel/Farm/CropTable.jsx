import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useGetCropsByFarmQuery } from "../../../store/api/cropApi";

const CropTable = ({ farmId }) => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const {
    data: cropsData,
    error: cropsError,
    isLoading: cropsLoading,
  } = useGetCropsByFarmQuery(farmId);

 
  const handleRemoveCrop = async (cropId) => {
    try {
      await fetch(`http://localhost:8000/api/v1/crop/${cropId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCrops(crops.filter((crop) => crop._id !== cropId));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (cropsData) {
      setCrops(cropsData);
      setLoading(false);
    }
  }, [cropsData]);

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (crops.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-600">No crops found</h2>
        <p className="text-gray-500 mt-2">
          Start by adding some crops to your farm
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-2xl font-semibold text-gray-900">Crops Table</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Growth Stage
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Health Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Harvest Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Remove Crop
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {crops.map((crop) => (
              <tr
                key={crop._id}
                className="hover:bg-gray-50"
                onClick={() => {
                  navigate(`/user/dashboard/croppage/${crop._id}`);
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    {crop.image ? (
                      <img
                        src={crop.image}
                        alt={crop.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {crop.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className="inline-flex px-2 py-1 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor:
                        crop.growthStage === "Planted"
                          ? "rgb(220, 252, 231)"
                          : crop.growthStage === "Growing"
                          ? "rgb(254, 249, 195)"
                          : "rgb(224, 242, 254)",
                      color:
                        crop.growthStage === "Planted"
                          ? "rgb(22, 101, 52)"
                          : crop.growthStage === "Growing"
                          ? "rgb(113, 63, 18)"
                          : "rgb(3, 105, 161)",
                    }}
                  >
                    {crop.growthStage}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {crop.healthStatus}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(crop.harvestDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleRemoveCrop(crop._id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CropTable;
