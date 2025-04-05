import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import { useParams } from "react-router-dom";
import { useCreateFinanceMutation } from "../../../store/api/financeApi";
import { useGetFarmByIdQuery } from "../../../store/api/farmApi";

const CreateFinance = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [farm, setFarm] = useState("");
  // Hardcoded farm ID from your example
  const { farmId } = useParams();
  const [createFinance] = useCreateFinanceMutation();

  const { data: farmData, isLoading, error } = useGetFarmByIdQuery(farmId);



  useEffect(() => {
    if (!isLoading && !error && farmData) {
      setFarm(farmData);
    }
  }, [farmData]);
  const handleCreateFinance = async () => {
    setLoading(true);
    setMessage("");
    try {
      const responce = await createFinance({ farm: farmId });
      // const response = await fetch("http://localhost:8000/api/v1/finance", {
      //   method: "POST",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ farm: farmId }),
      // });

   
      if (!response.ok) {
        throw new Error("Failed to create finance");
      }
      const data = await response.json();

      setMessage("Finance created successfully!");
    } catch (error) {
      console.error("Error creating finance:", error);
      setMessage("Error creating finance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCreateFinance}
      disabled={loading}
      className="mt-4 w-30 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Create Finance
    </button>
  );
};

export default CreateFinance;
