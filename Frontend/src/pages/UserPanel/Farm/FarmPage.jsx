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

export default function FarmPage() {
  const { farmId } = useParams();
  const navigate = useNavigate();
  const [farmData, setFarmData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFarmData() {
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
        console.log("Fetched farm data:", jsonData);
        setFarmData(jsonData);
      } catch (error) {
        console.error("Error fetching farm data: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFarmData();
  }, [farmId]);

  if (loading) {
    return <Loader />;
  }

  if (!farmData) {
    return (
      <div className="w-full bg-white rounded-lg shadow p-4">
        <p>No farm data found.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow p-4 space-y-8">
      {/* Header Section */}
      <header className="mb-4">
        <div className="flex justify-end">
          <Farm farmData={farmData} farmId={farmId} />
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
          <AddTransaction farmId={farmId} />
        </div>
      </section>

      {/* Finance Summary Section */}
      <section>
        <div className="flex justify-end">
          <FinanceSummary farmId={farmId} />
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
