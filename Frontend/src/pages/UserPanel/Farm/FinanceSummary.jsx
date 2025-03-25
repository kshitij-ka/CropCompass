import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";

const FinanceSummary = ({ farmId, financeId }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/finance/summary/${financeId}`,
          { credentials: "include" }
        );
        console.log("Summary response:", response);
        if (!response.ok) {
          throw new Error("Failed to fetch summary");
        }
        const data = await response.json();
        setSummary(data);
      } catch (err) {
        console.error("Error fetching finance summary:", err);
        setError("Error fetching summary");
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, [farmId]);

  // if (loading) return <Loader />;
  //if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  // Extract only the important fields.
  const { totalExpenses, totalRevenue, transactions } = summary || {};
  const transactionsCount = Array.isArray(transactions)
    ? transactions.length
    : 0;

  return (
    <div className="w-full mx-auto p-8 bg-gray-50">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <header className="bg-blue-600 px-6 py-4">
          <h2 className="text-3xl font-bold text-white">
            Transactions Summary
          </h2>
        </header>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Farm name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Size (acres)
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceSummary;
