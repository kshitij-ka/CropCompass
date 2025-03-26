import { useEffect, useState } from "react";
import Td from "../../../components/Td";
import Loader from "../../../components/Loader";

const Transactions = ({ farmId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/finance/${farmId}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
  }, [farmId]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loading ? (
        <Loader />
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Total Expenses
              </th>
              <th scope="col" className="px-6 py-3">
                totalRevenue
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-3">
                {data.totalExpenses ? data.totalExpenses : "N/A"}
              </td>
              <td className="px-6 py-3">
                {data.totalRevenue ? data.totalRevenue : "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;
