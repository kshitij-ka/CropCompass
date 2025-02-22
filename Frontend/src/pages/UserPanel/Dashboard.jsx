import React from "react";

const Dashboard = () => {
  return (
    <>
      
      <div className="w-full bg-white rounded-lg shadow p-4">
        <div className="flex flex-col justify-center items-center mb-4">
          <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
            Upcoming Sessions{" "}
          </h2>
          <div className="bg-gray-300 w-full h-52 rounded-lg"></div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <input type="range" className="w-full h-auto" readOnly:true/>
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="ml-2 font-medium">Topup</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm">06:24:45 AM</span>
                <span className="ml-2 text-green-500 text-sm">+$5,553</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Weekly Summary</h3>
          <div className="grid grid-cols-8 gap-2 mt-4">
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Sun</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Mon</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Tue</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Wed</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Thu</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Fri</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Sat</span>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 text-xs">Completed</span>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-2">
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-16"></div>
              <div className="bg-gray-300 h-4"></div>
              <div className="bg-red-500 rounded-b-lg h-16"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-20"></div>
              <div className="bg-gray-300 h-8"></div>
              <div className="bg-red-500 rounded-b-lg h-12"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-12"></div>
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-red-500 rounded-b-lg h-20"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-24"></div>
              <div className="bg-gray-300 h-4"></div>
              <div className="bg-red-500 rounded-b-lg h-8"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-16"></div>
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-red-500 rounded-b-lg h-16"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-16"></div>
              <div className="bg-gray-300 h-4"></div>
              <div className="bg-red-500 rounded-b-lg h-24"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-green-500 rounded-t-lg h-8"></div>
              <div className="bg-gray-300 h-16"></div>
              <div className="bg-red-500 rounded-b-lg h-20"></div>
            </div>
            <div
              className="col-span-1 flex flex-col justify-between items-center rounded-lg p-2"
              style={{ height: "100px" }}
            >
              <div className="bg-gray-300 h-24"></div>
              <div className="bg-gray-300 h-24"></div>
              <div className="bg-gray-300 h-24"></div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Notifications</h3>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="ml-2 font-medium">Topup</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm">06:24:45 AM</span>
                <span className="ml-2 text-green-500 text-sm">+$5,553</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="ml-2 font-medium">Topup</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm">06:24:45 AM</span>
                <span className="ml-2 text-green-500 text-sm">+$5,553</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
