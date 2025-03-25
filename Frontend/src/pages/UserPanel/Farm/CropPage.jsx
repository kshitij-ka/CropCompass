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
import { useGetCropByIdQuery } from "../../../store/api/cropApi";

export default function CropPage() {
  const { cropId } = useParams();
  const navigate = useNavigate();
  const [farmData, setFarmData] = useState("");
  const [loading, setLoading] = useState(true);

  const farmId = cropId;

  console.log("Farm id is : ", farmId);

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

  console.log("djoejwrru9", crop);

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
      <section>
        <CropTable farmId={farmId} />
      </section>

      {/* Create Transactions Section */}
      <section>
        <div className="flex justify-end">
          <CreateTransactions farmId={farmId} />
        </div>
      </section>

      {/* Transactions Table Section */}
      <section>
        <Transactions farmId={farmId} />
      </section>

      {/* Add Transaction Modal Section */}
      <section>
        <div className="flex justify-end">
          <AddTransaction farmId={farmId} financeId={farmData?.finances?._id} />
        </div>
      </section>

      {/* Finance Summary Section */}
      <section>
        <div className="flex justify-end">
          <FinanceSummary farmId={farmId} financeId={farmData?.finances?._id} />
        </div>
      </section>

      {/* Create Task Section */}
      <section>
        <div className="flex justify-end">
          <CreateTask farmId={farmId} />
        </div>
      </section>

      {/* Display Task Section */}
      <section>
        <div className="flex justify-end">
          <DisplayTast farmId={farmId} />
        </div>
      </section>
    </div>
  );
}
