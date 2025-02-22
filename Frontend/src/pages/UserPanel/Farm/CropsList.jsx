import React, { useState } from "react";

const AddCrop = ({ farmId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [farm, setFarm] = useState(farmId);
  const [harvestDate, setHarvestDate] = useState("");
  const [growthStage, setGrowthStage] = useState("Planted");
  const [healthStatus, setHealthStatus] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("farm", farm);
    formData.append("harvestDate", harvestDate);
    formData.append("growthStage", growthStage);
    formData.append("healthStatus", healthStatus);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`http://localhost:8000/api/v1/crop`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create crop");
      }
      setSuccess("Crop created successfully!");
      setName("");
      setFarm("");
      setHarvestDate("");
      setGrowthStage("");
      setHealthStatus("");
      setImage(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Add New Crop
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-3xl mx-4">
            <div className="relative bg-white rounded-xl shadow-lg">
              {/* Decorative SVG Elements - Moved further right */}
              <div className="z-0 absolute right-0 top-0 h-full w-32 overflow-hidden pointer-events-none">
                <svg
                  viewBox="0 0 200 800"
                  className="absolute right-0 h-full transform translate-x-16 fill-green-100"
                >
                  <path d="M0,0 Q100,200 0,400 Q100,600 0,800 L200,800 L200,0 Z" />
                </svg>
                <svg
                  viewBox="0 0 200 800"
                  className="absolute right-0 h-full transform translate-x-8 fill-green-200/40"
                >
                  <path d="M0,0 Q80,200 0,400 Q80,600 0,800 L200,800 L200,0 Z" />
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  className="absolute right-12 top-20 w-16 h-16 fill-green-300/30"
                >
                  <path d="M50,0 Q100,50 50,100 Q0,50 50,0 Z" />
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  className="absolute right-16 top-48 w-12 h-12 fill-green-400/20"
                >
                  <path d="M50,0 Q100,50 50,100 Q0,50 50,0 Z" />
                </svg>
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b rounded-t border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Add New Crop
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm z-100 w-8 h-8 inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Crop Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rice"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="harvestDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Harvest Date
                    </label>
                    <input
                      type="date"
                      id="harvestDate"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="growthStage"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Growth Stage
                    </label>
                    <select
                      id="growthStage"
                      value={growthStage}
                      onChange={(e) => setGrowthStage(e.target.value)}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="Planted">Planted</option>
                      <option value="Growing">Growing</option>
                      <option value="Ready to Harvest">Ready to Harvest</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="healthStatus"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Health Status
                    </label>
                    <input
                      type="text"
                      id="healthStatus"
                      value={healthStatus}
                      onChange={(e) => setHealthStatus(e.target.value)}
                      placeholder="Healthy"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Crop Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full z-100 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
                    >
                      {uploading ? "Uploading..." : "Create Crop"}
                    </button>
                  </div>

                  {error && <p className="text-red-600 mt-4">{error}</p>}
                  {success && <p className="text-green-600 mt-4">{success}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCrop;
