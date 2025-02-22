import React from "react";

const Message = ({ message }) => {
  const date = new Date();
  return (
    <div className="w-auto h-auto bg-gray-200 rounded-md text-start p-3 mx-4">
      <p className="">{message}</p>
      <p className="text-end text-sm ">
        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Message;
