import React, { useState } from "react";
import Loader from "../../../components/Loader";

const CreateFinance = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Hardcoded farm ID from your example
  const farmId = "67b9e6829c4979463e64a0fc";

  const handleCreateFinance = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("http://localhost:8000/api/v1/finance", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ farm: farmId }),
      });
      if (!response.ok) {
        throw new Error("Failed to create finance");
      }
      const data = await response.json();
      console.log("Finance response:", data);
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
      {loading ? <Loader></Loader> : "Create Finance"}
    </button>
  );
};

export default CreateFinance;
