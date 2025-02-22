import React from "react";
import { useNavigate } from "react-router-dom";
import Piechart from "../../components/monitoring charts/Piechart";
import TotalSpent from "../../components/TotalSpent";
import FarmList from "../../components/FarmList";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <div className="mb-4 flex justify-end space-x-4">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-md px-6 py-3 mr-2 mb-2 dark:bg-gradient-to-r dark:from-blue-600 dark:via-blue-700 dark:to-blue-800 dark:hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 float-right shadow-lg transform transition-transform hover:scale-105"
          onClick={() => navigate("addfarm")}
        >
          <img
            src="/images/add.svg"
            alt="Add"
            className="inline-block h-5 w-5 mr-2 mb-1"
          />
          New Farm
        </button>
      </div>

      <div className="mb-4 flex space-x-4">
        <Piechart />
        <TotalSpent />
      </div>
      <FarmList />
    </div>
  );
};

export default Dashboard;
