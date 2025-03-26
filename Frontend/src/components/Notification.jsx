import React from "react";

const Notification = ({ notification }) => {
  let timeStringToDayName = (dateStr) => {
    // for getting day name by time string
    // const dateStr = "2024-09-26T04:31:50.646+00:00";
    const date = new Date(dateStr);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    return dayName;
  };

  let timeStringtoRealTime = (utcDateStr) => {
    // for converting the to get time in am or pm
    //const utcDateStr = "2024-09-26T04:31:50.646+00:00";
    const date = new Date(utcDateStr);
    // India TimeZone is Asia/Kolkata, which is UTC+5:30
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const istDate = date.toLocaleString("en-US", options);

    return istDate;
  };

  let { message, timestamp, isRead } = notification;

  const realTimeString = timeStringtoRealTime(timestamp);

  return (
    <div
      className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
      onClick={() => {
        isRead = true;
      }}
    >
      <div className="flex items-center">
        <img
          src="https://placehold.co/40x40"
          alt="Profile picture of the user who followed you"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-900">{message}</p>
          <p className="text-gray-500">
            {timeStringToDayName(timestamp)},
            {realTimeString.substring(21, 26) +
              " " +
              realTimeString.substring(30)}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500 mr-3">{realTimeString.substring(0, 18)}</p>
        <span
          className={`w-3 h-3 bg-blue-600 rounded-full ${isRead && "hidden"}`}
        ></span>
      </div>
    </div>
  );
};

export default Notification;
