import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Farm from "./Farm";
import AddCrop from "../Crops/AddCrop";

export default function FarmPage() {
  const { farmId } = useParams();
  const navigate = useNavigate();
  const [farmData, setFarmData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/farm/${farmId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setFarmData(jsonData);
      } catch (error) {
        console.error("Error fetching farm data: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [farmId]);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-lg shadow p-4">
        <p>Loading farm data...</p>
      </div>
    );
  }

  if (!farmData) {
    return (
      <div className="w-full bg-white rounded-lg shadow p-4">
        <p>No farm data found.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      {/* Back Button */}
      <Farm farmData={farmData}></Farm>
      <AddCrop></AddCrop>
    </div>
  );
}
