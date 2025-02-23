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
        console.log("Fetched data:", data);
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
                Field
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {!Array.isArray(data) ? (
              // Data is an object: show key-value pairs
              Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-6 py-3 font-bold">{key}</td>
                  <td className="px-6 py-3">
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </td>
                </tr>
              ))
            ) : // Data is an array: render using your Td component
            data.length > 0 ? (
              data.map((item) => <Td key={item.id} children={item} />)
            ) : (
              <tr>
                <td colSpan={2} className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;
