import React from "react";

const Message = ({ message, type = "error" }) => {
  const date = new Date();

  const background =
    type === "error"
      ? "bg-red-100 border border-red-400 text-red-700"
      : "bg-gray-100 border border-gray-300 text-gray-800";

  return (
    <div className={`rounded-md p-3 ${background}`}>
      <p className="font-medium">{message}</p>
      <p className="text-end text-sm text-gray-600">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Message;
