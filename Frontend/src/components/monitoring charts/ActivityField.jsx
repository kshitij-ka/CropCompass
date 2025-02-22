// ActivityFeed.jsx
import React from "react";

const ActivityFeed = () => {
  // Hard-coded activity feed data
  const activities = [
    {
      id: 1,
      description: "Farm A reported increased yield",
      time: "10 mins ago",
    },
    { id: 2, description: "Sensor B recalibrated", time: "20 mins ago" },
    { id: 3, description: "Alert triggered on Farm C", time: "30 mins ago" },
  ];

  return (
    <ul className="space-y-2">
      {activities.map((activity) => (
        <li key={activity.id} className="bg-gray-50 p-2 rounded shadow">
          <p className="text-sm">{activity.description}</p>
          <span className="text-xs text-gray-500">{activity.time}</span>
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;
