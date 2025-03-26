import React, { useState } from "react";
import { useCreateCropMutation } from "../../../store/api/cropApi";

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
  const [createCrop] = useCreateCropMutation();

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
      const response = await createCrop(formData);
      // const response = await fetch(`http://localhost:8000/api/v1/crop`, {
      //   method: "POST",
      //   credentials: "include",
      //   body: formData,
      // });
      // if (!response.ok) {
      //   throw new Error("Failed to create crop");
      // }

     
      setSuccess("Crop created successfully!");
      // Reset form fields
      setName("");
      setFarm("");
      setHarvestDate("");
      setGrowthStage("");
      setHealthStatus("");
      setImage(null);
      setIsModalOpen(false);
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
        className="block text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center h-10 font-extrabold"
        type="button"
      >
        Add New Crop
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl mx-4">
            <div className="relative bg-white rounded-xl shadow-lg">
              {/* Decorative SVG Elements */}
              <div className="absolute right-0 top-0 h-full w-48 overflow-hidden pointer-events-none">
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
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Add New Crop
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
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
              <div className="p-4 md:p-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Crop Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rice"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="harvestDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Harvest Date
                    </label>
                    <input
                      type="date"
                      id="harvestDate"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="growthStage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Growth Stage
                    </label>
                    <select
                      id="growthStage"
                      value={growthStage}
                      onChange={(e) => setGrowthStage(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm"
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
                      className="block text-sm font-medium text-gray-700"
                    >
                      Health Status
                    </label>
                    <input
                      type="text"
                      id="healthStatus"
                      value={healthStatus}
                      onChange={(e) => setHealthStatus(e.target.value)}
                      placeholder="Healthy"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Crop Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="mt-1 block w-full"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                      {uploading ? "Uploading..." : "Create Crop"}
                    </button>
                  </div>
                  {error && <p className="text-red-600">{error}</p>}
                  {success && <p className="text-green-600">{success}</p>}
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
