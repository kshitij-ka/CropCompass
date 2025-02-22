// AlertsPanel.jsx
import React from "react";

const AlertsPanel = () => {
  // Hard-coded alerts data
  const alerts = [
    { id: 1, message: "Temperature exceeds threshold", type: "warning" },
    { id: 2, message: "New sensor connected", type: "info" },
    { id: 3, message: "Power consumption high", type: "warning" },
  ];

  return (
    <div>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-2 rounded mb-2 ${
            alert.type === "warning" ? "bg-red-100" : "bg-blue-100"
          }`}
        >
          <p className="text-sm">{alert.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;
