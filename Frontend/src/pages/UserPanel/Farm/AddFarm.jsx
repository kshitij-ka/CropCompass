import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateFarmMutation } from "../../../store/api/farmApi";

const AddFarm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");
  const [waterContent, setWaterContent] = useState("");
  const [sizeContent, setSizeContent] = useState("");
  const [soilType, setSoilType] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigator = useNavigate();

  const [createFarm] = useCreateFarmMutation();
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
      const res = await createFarm(farmData);
    

      if (res.error) {
        return null;
      }

      setSuccess(true);
      setError(null);
      setIsModalOpen(false);
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Add New Farm
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-2xl mx-4">
            <div className="relative bg-white rounded-xl shadow-lg">
              {/* Decorative Leaves */}
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
                  Add New Farm
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="farmName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Farm Name
                    </label>
                    <input
                      type="text"
                      id="farmName"
                      value={farmName}
                      onChange={(e) => setFarmName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200 ease-in-out bg-white/80"
                      placeholder="Enter farm name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200 ease-in-out bg-white/80"
                      placeholder="Enter location"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="waterContent"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Water Content
                    </label>
                    <input
                      type="text"
                      id="waterContent"
                      value={waterContent}
                      onChange={(e) => setWaterContent(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200 ease-in-out bg-white/80"
                      placeholder="Enter water content"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="waterContent"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Size of Land
                    </label>
                    <input
                      type="text"
                      id="waterContent"
                      value={sizeContent}
                      onChange={(e) => setSizeContent(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200 ease-in-out bg-white/80"
                      placeholder="Enter water content"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="soilType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Soil Type
                    </label>
                    <input
                      type="text"
                      id="soilType"
                      value={soilType}
                      onChange={(e) => setSoilType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-200 ease-in-out bg-white/80"
                      placeholder="Enter soil type"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  >
                    Add Farm
                  </button>

                  {error && (
                    <p className="mt-4 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                      {error}
                    </p>
                  )}
                  {success && (
                    <p className="mt-4 text-green-500 text-sm bg-green-50 p-3 rounded-lg">
                      Farm added successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFarm;
