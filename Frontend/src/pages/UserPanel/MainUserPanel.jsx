import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdHistory } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { BACKEND_URL } from "../../constants";

const MainUserPanel = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const responce = await fetch(`${BACKEND_URL}/api/v1/logout`, {
      method: "Get",
      credentials: "include",
    });

    const data = await responce.json();

    //console.log("User Logged out data is : ", data);

    if (data.success == true) {
      navigate("/user/login");
    }
  };

  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="flex items-center mb-4 md:hidden">
          <img
            src={`${user.avatar}`}
            alt="Profile Picture"
            className="rounded-full w-10 h-10 mr-2"
          />
          <span className="text-lg font-medium">Hello, {user.name}</span>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1.5/12 md:w-3/12 bg-white rounded-lg shadow p-4">
            <div className="hidden md:flex items-center mb-4">
              <img
                src={`${user.avatar}`}
                alt="Profile Picture"
                className="rounded-full w-10 h-10 mr-2"
              />
              <span className="text-lg font-medium">Hello, {user.name}</span>
            </div>
            <ul className="list-none">
              <li className="py-2 border-b border-gray-200">
                <Link to={"/user/dashboard"} className="flex items-center">
                  <IoIosHome className="text-xl font-bold text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/scheduledmeetings"}
                  className="flex items-center"
                >
                  <RiCalendarScheduleLine className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Scheduled Meeting
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/history"}
                  className="flex items-center"
                >
                  <MdHistory className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    History
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/notifications"}
                  className="flex items-center"
                >
                  <IoIosNotifications className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Notifications
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/feedback"}
                  className="flex items-center"
                >
                  <MdFeedback className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Feedback and Ratings
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/support"}
                  className="flex items-center"
                >
                  <MdOutlineSupportAgent className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Support
                  </span>
                </Link>
              </li>
              <li className="py-2 border-b border-gray-200">
                <Link
                  to={"/user/dashboard/settings"}
                  className="flex items-center"
                >
                  <IoSettings className="text-xl text-gray-700" />
                  <span className="ml-2 text-sm font-semibold text-gray-500 hidden md:block">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
          <div className="hidden md:block w-3/12 bg-white rounded-lg shadow p-4 h-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">My Profile</h3>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <BsThreeDotsVertical className="text-lg" />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to={"/user/dashboard"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-user"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mb-4">
              <img
                src={`${user.avatar}`}
                alt="Profile Picture"
                class="rounded-full w-24 h-24 mx-auto"
              />
              <h4 class="text-lg font-medium mt-2">{user.name}</h4>
              {/* <span class="text-gray-500 text-sm">@thomasdox</span> */}
              <p class="text-gray-500 text-sm mt-2">
                Join on {user.createdAt && user.createdAt.substring(0, 10)}
              </p>
              <p class="text-gray-500 text-sm mt-2">
                {user.description == null &&
                  "I am a Senior Software Engineer at Google and also mentored 50+ students to get there dream job."}
              </p>
              <div class="flex justify-center mt-4">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                  <FaHome className="text-lg font-extrabold" />
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2">
                  <IoMdSettings className="text-lg font-extrabold" />
                </button>
                <button
                  class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                  onClick={handleLogOut}
                >
                  <RiLogoutBoxLine className="text-lg font-extrabold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainUserPanel;
