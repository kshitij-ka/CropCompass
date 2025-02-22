import React from "react";
import MentorSessionCard from "./MentorSessionCard";

const ScheduleMeeting = () => {
  let meetingInfo = [
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
    {
      id: "7K6dU5qLpF9tS4",
      mentorName: "mentor",
      mentorMail: "mentor4@gmail.com",
      mentorAvatar: "/images/profile4.jpeg",
      studentName: "student",
      studentMail: "student4@gmail.com",
      studentAvatar: "/images/profile4.jpeg",
      roomid: "F7mT9rV5uP3sL2K7cJ8xH4zG1yW5aQ9nD2o",
      schduledTime: "2024-09-29T11:20:40.456+00:00",
      createdAt: "2024-09-29T11:20:40.456+00:00",
      updatedAt: "2024-09-29T11:20:40.456+00:00",
      amountPaid: "550",
      status: false,
    },
  ];

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow p-4 min-h-[85vh]">
        <div className="flex flex-col justify-center items-center mb-4">
          <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
            Scheduled Meetings
          </h2>
        </div>
        <div className="flex w-full flex-col gap-5">
          {meetingInfo.map((session) => (
            <MentorSessionCard session={session} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
