import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import { useGetTransactionsQuery } from "../../../store/api/financeApi";

function formatTimestamp(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Ensures AM/PM format
  });
}

const FinanceSummary = ({ farmId, financeId }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  const {
    data: transaction,
    error: transactionError,
    isLoading,
  } = useGetTransactionsQuery(financeId);

 

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/finance/summary/${financeId}`,
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
                Type of Transaction
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transaction?.map((transaction) => (
              <tr>
                <td scope="col" className="px-6 py-3">
                  {transaction.type}
                </td>
                <td scope="col" className="px-6 py-3">
                  {transaction.amount}
                </td>
                <td scope="col" className="px-6 py-3">
                  {transaction.description}
                </td>
                <td scope="col" className="px-6 py-3">
                  {formatTimestamp(transaction.date)}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    type="button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceSummary;
