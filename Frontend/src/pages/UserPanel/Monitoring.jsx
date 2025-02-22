// MonitoringPage.jsx
import React from "react";
import MetricsCard from "../../components/monitoring charts/MetricCard";
import PerformanceChart from "../../components/monitoring charts/PerformanceChart";
import AlertsPanel from "../../components/monitoring charts/AlertsPanel";
import ActivityFeed from "../../components/monitoring charts/ActivityField";
import Piechart from "../../components/monitoring charts/Piechart";

const MonitoringPage = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <div className="p-6">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <MetricsCard title="Active Farms" value="12" />
          <MetricsCard title="Total Yield" value="3500 kg" />
          <MetricsCard title="Alerts" value="3" />
          <MetricsCard title="Uptime" value="99.9%" />
        </div>

        {/* Performance Trend Chart */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Performance Trend</h2>
          <PerformanceChart />
        </div>
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Performance Trend</h2>
          <Piechart></Piechart>
        </div>

        {/* Alerts and Activity Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Alerts</h2>
            <AlertsPanel />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPage;
