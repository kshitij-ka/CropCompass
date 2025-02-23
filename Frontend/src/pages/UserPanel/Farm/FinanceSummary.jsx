import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";

const FinanceSummary = ({ farmId }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/finance/summary/${farmId}`,
          { credentials: "include" }
        );
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

  if (loading) return <Loader />;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  // Extract only the important fields.
  const { totalExpenses, totalRevenue, transactions } = summary;
  const transactionsCount = Array.isArray(transactions)
    ? transactions.length
    : 0;

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-50">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <header className="bg-blue-600 px-6 py-4">
          <h2 className="text-3xl font-bold text-white">Finance Summary</h2>
        </header>
        <div className="p-6">
          <table className="w-full table-auto">
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-600">
                  Total Expenses
                </td>
                <td className="px-6 py-4 text-gray-800">{totalExpenses}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-600">
                  Total Revenue
                </td>
                <td className="px-6 py-4 text-gray-800">{totalRevenue}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-600">
                  Transactions
                </td>
                <td className="px-6 py-4 text-gray-800">{transactionsCount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinanceSummary;
