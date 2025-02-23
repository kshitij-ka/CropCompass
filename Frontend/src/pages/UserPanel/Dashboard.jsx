import React from "react";
import { useNavigate } from "react-router-dom";
import Piechart from "../../components/monitoring charts/Piechart";
import TotalSpent from "../../components/TotalSpent";
import FarmList from "../../components/FarmList";
import AddFarm from "./Farm/AddFarm";

const Dashboard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <div className="mb-4 flex justify-end space-x-4">
        <AddFarm />
      </div>

      <div className="mb-4 flex space-x-10">
        <Piechart />
        <TotalSpent />
      </div>
      <FarmList />
    </div>
  );
};
export default Dashboard;
