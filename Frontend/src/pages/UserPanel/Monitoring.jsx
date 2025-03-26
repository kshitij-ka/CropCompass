// MonitoringPage.jsx
import React from "react";
import MetricsCard from "../../components/monitoring charts/MetricCard";
import PerformanceChart from "../../components/monitoring charts/PerformanceChart";
import AlertsPanel from "../../components/monitoring charts/AlertsPanel";
import ActivityFeed from "../../components/monitoring charts/ActivityField";
import Piechart from "../../components/monitoring charts/Piechart";
import { useGetFarmsQuery } from "../../store/api/farmApi";
import PerformanceChart2 from "../../components/monitoring charts/PerformanceChart2";

const calculateSpend = (farms) => {
  let totalSpend = 0;
  for (let i = 0; i < farms.length; i++) {
    if (!farms[i]) continue;
    if (!farms[i]?.finances) continue;
    if (!farms[i]?.finances?.totalExpenses) continue;
    totalSpend += farms[i]?.finances?.totalExpenses;
  }
  return totalSpend;
};

const calculateRevenue = (farms) => {
  let totalSpend = 0;
  for (let i = 0; i < farms.length; i++) {
    if (!farms[i]) continue;
    if (!farms[i]?.finances) continue;
    if (!farms[i]?.finances?.totalRevenue) continue;
    totalSpend += farms[i]?.finances?.totalRevenue;
  }
  return totalSpend;
};

const MonitoringPage = () => {
  const { data: farms, error, isLoading } = useGetFarmsQuery();

 

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <div className="p-6">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <MetricsCard title="Active Farms" value={farms?.length} />
          <MetricsCard
            title="Total Expence"
            value={farms && calculateSpend(farms)}
          />
          <MetricsCard
            title="Total Revenue"
            value={farms && calculateRevenue(farms)}
          />
          <MetricsCard title="Uptime" value="99.9%" />
        </div>

        {/* Performance Trend Chart */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Expence Trend</h2>
          <PerformanceChart />
          <h2 className="text-lg font-semibold mb-2 mt-10">Revenue Trend</h2>
          <PerformanceChart2 />
        </div>
        {/* <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Performance Trend</h2>
          <Piechart></Piechart>
        </div> */}

        {/* Alerts and Activity Feed */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Alerts</h2>
            <AlertsPanel />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
            <ActivityFeed />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MonitoringPage;
