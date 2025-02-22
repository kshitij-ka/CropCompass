import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FarmPage() {
  const { farmId } = useParams();
  const [farmData, setFarmData] = useState({});

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
        const jsonData = await response.json(); // renamed variable to avoid confusion
        console.log(jsonData);
        setFarmData(jsonData);
      } catch (error) {
        console.error("Error fetching farm data: ", error);
      }
    }
    fetching();
  }, [farmId]);

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
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
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
        <td
          className="px-6 py-4"
          onClick={() => {
            console.log("Td", farmData._id);
            navigate(`farmpage/${farmData._id}`);
          }}
        >
          {farmData.name}
        </td>
        <td className="px-6 py-4">{farmData.location}</td>
        <td className="px-6 py-4">{farmData.soilType}</td>
        <td className="px-6 py-4">{farmData.size}</td>
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    </div>
  );
}
