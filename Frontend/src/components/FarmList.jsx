import { useEffect, useState } from "react";
import Td from "./Td";
import Loader from "./Loader";
import { useGetFarmsQuery } from "../store/api/farmApi";

const FarmList = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { data: farms, error, isLoading } = useGetFarmsQuery();

  console.log(farms);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/farm", {
  //     credentials: "include",
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .then(setLoading(false))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {isLoading ? (
        <Loader></Loader>
      ) : (
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
          <tbody>
            {farms && farms.length > 0 ? (
              farms.map((item) => <Td key={item.id} children={item} />)
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
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

export default FarmList;
