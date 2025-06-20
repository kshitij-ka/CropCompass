import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Farm from "./Farm";
import CropTable from "./CropTable";
import Transactions from "./Transactions";
import CreateTransactions from "./CreateTransactions";
import Loader from "../../../components/Loader";
import AddTransaction from "./AddTransactions";
import FinanceSummary from "./FinanceSummary";
import CreateTask from "./CreateTask";
import DisplayTast from "./DisplayTask";
import { useGetFarmByIdQuery } from "../../../store/api/farmApi";
import {
  useCropHarvestQuery,
  useGetCropByIdQuery,
  useSuggestFertilizersQuery,
  useSuggestNextCropQuery,
  useSuggestPesticidesQuery,
} from "../../../store/api/cropApi";
import { PiPottedPlantFill } from "react-icons/pi";
import { GiGrimReaper } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function CropPage() {
  const { cropId } = useParams();
  const navigate = useNavigate();
  const [farmData, setFarmData] = useState("");
  const [loading, setLoading] = useState(true);

  const farmId = cropId;

 

  const { data: farm, error, isLoading } = useGetFarmByIdQuery(farmId);
  const {
    data: crop,
    error: cropError,
    isLoading: cropLoading,
  } = useGetCropByIdQuery(cropId);

  useEffect(() => {
    if (!isLoading && !error && farm) {
      setFarmData(farm);
      setLoading(false);
    }
  }, [farm]);

 
  const {
    data: harvest,
    isLoading: harvestLoading,
    error: harvestError,
  } = useCropHarvestQuery(cropId);

 

  const {
    data: pesticides,
    isLoading: pesticideLoading,
    error: pesticideError,
  } = useSuggestPesticidesQuery(cropId);

  const {
    data: fertilizers,
    isLoading: fertilizerLoading,
    error: fertilizerError,
  } = useSuggestFertilizersQuery(cropId);

  const {
    data: nextCrop,
    isLoading: nextCropLoading,
    error: nextCropError,
  } = useSuggestNextCropQuery(cropId);

  return (
    <div className="w-full bg-white rounded-lg shadow p-4 space-y-8">
      {/* Header Section */}
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{crop?.name}</h2>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => navigate(`/user/dashboard`)}
            >
              Back
            </button>
          </div>
        </div>
      </header>

      {/* Crop Table Section */}
      <section className="w-full flex justify-center">
        <img src={crop?.image} className="w-1/2 h-auto rounded-md" alt="" />
      </section>

      <section className="w-full flex justify-center flex-col">
        <div className="w-full h-auto flex items-center justify-between gap-5">
          <div className="w-full">
            <button
              data-tooltip-target="tooltip-light"
              data-tooltip-style="light"
              type="button"
              class="text-white w-full text-md font-semibold bg-green-700 hover:bg-green-800 focus:ring-4 inline-flex items-center gap-2 focus:outline-none focus:ring-green-300  rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <PiPottedPlantFill className="text-2xl" />{" "}
              {formatDate(crop?.plantedDate)}
            </button>
            <div
              id="tooltip-light"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip"
            >
              Planted Date
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <div className="w-full">
            <button
              data-tooltip-target="tooltip-light1"
              data-tooltip-style="light"
              type="button"
              class=" w-full text-black text-md font-semibold bg-green-200 hover:bg-green-300 focus:ring-4 inline-flex items-center gap-2 focus:outline-none focus:ring-green-300  rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <GiGrimReaper className="text-2xl" />{" "}
              {formatDate(crop?.harvestDate)}
            </button>
            <div
              id="tooltip-light1"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip"
            >
              Harvest Date
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <div className="w-full">
            <button
              data-tooltip-target="tooltip-light2"
              data-tooltip-style="light"
              type="button"
              class="text-black w-full text-md font-semibold bg-white hover:bg-green-50 focus:ring-4 inline-flex items-center gap-2 focus:outline-none focus:ring-orange-300 border-2 border-green-200 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <GiProgression className="text-2xl" />{" "}
              {formatDate(crop?.harvestDate)}
            </button>
            <div
              id="tooltip-light2"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip"
            >
              Progress
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center flex-col">
        <h1 className="text-2xl font-bold text-center my-3 mb-10">
          Automated Mentoring For Crop Health And Groth
        </h1>

        <div className="overflow-hidden rounded-xl">
          <table>
            <thead className="bg-gray-50 ">
              <tr>
                <th className="px-6 py-3 font-extrabold text-left text-sm  text-gray-800 uppercase tracking-wider  border-2">
                  Expected Doubts
                </th>
                <th className="px-6 py-3 font-extrabold text-left text-sm  text-gray-800 uppercase tracking-wider  border-2">
                  Approximate Solution
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap  border-2">
                  Approximate Harvest Date
                </td>
                <td className="px-6 py-4 whitespace-pre-wrap border-2">
                  {harvest?.message}
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap  border-2">
                  Suitable Pesticides For Crop
                </td>
                <td className="px-6 py-4 whitespace-pre-wrap border-2">
                  {pesticides?.message}
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap  border-2">
                  Suitable fertilizers For Crop
                </td>
                <td className="px-6 py-4 whitespace-pre-wrap border-2">
                  {fertilizers?.message}
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap  border-2">
                  Best Crop To Grow
                </td>
                <td className="px-6 py-4 whitespace-pre-wrap border-2">
                  {nextCrop?.message}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="flex items-start justify-start gap-5">
          <h6 className="text-lg font-semibold min-w-[200px] text-nowrap">
            Approximate Harvest Date:
          </h6>

          <p className="w-auto"></p>
        </div>

        <div className="flex items-start justify-start gap-5">
          <h6 className="text-lg font-semibold text-nowrap">
            Suitable Pesticides For Crop:
          </h6>
          <p>{pesticides?.message}</p>
        </div>

        <div className="flex items-start justify-start gap-5">
          <h6 className="text-lg font-semibold text-nowrap">
            Suitable fertilizers For Crop:
          </h6>
          <p>{fertilizers?.message}</p>
        </div>

        <div className="flex items-start justify-start gap-5">
          <h6 className="text-lg font-semibold text-nowrap">
            Best Crop To Grow:
          </h6>
          <p>{nextCrop?.message}</p>
        </div> */}
      </section>
    </div>
  );
}
