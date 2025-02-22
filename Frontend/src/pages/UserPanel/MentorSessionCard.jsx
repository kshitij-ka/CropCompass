import React from "react";
import { useSelector } from "react-redux";

const MentorSessionCard = ({ session }) => {
  const {
    id,
    mentorName,
    mentorMail,
    mentorAvatar,
    studentName,
    studentMail,
    studentAvatar,
    roomid,
    schduledTime,
    createdAt,
    updatedAt,
    amountPaid,
    status,
  } = session;

  const user = useSelector((store) => store.user);

  //console.log("User in the Dashborde : ");

  let timeStringToDayName = (dateStr) => {
    // for getting day name by time string
    // const dateStr = "2024-09-26T04:31:50.646+00:00";
    const date = new Date(dateStr);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    //console.log(dayName);
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
    console.log(istDate); // Output: "September 26, 2024, 10:01:50 AM"
    return istDate;
  };

  const realTimeString = timeStringtoRealTime(schduledTime);

  return (
    <>
      <li class="flex flex-col gap-5 w-full h-auto max-h-28 px-3 py-1 rounded-md hover:bg-slate-100 border-b-2">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src="/images/profile.jpeg"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {user.role === "user" ? mentorName : studentName}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {user.role === "user" ? mentorMail : studentMail}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            ₹{amountPaid}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div>
              <p className="text-gray-500">
                {timeStringToDayName(schduledTime)},
                {realTimeString.substring(21, 26) +
                  " " +
                  realTimeString.substring(30)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">{realTimeString.substring(0, 18)}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default MentorSessionCard;
