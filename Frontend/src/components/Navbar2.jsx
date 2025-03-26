import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const user = useSelector((store) => store.user);

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user.name !== "Unloggedin User") {
      setLoggedIn(true);
    }
  }, [user]);

  const handleUserSession = async (event) => {
    event.preventDefault();
    const responce = await fetch(`http://localhost:8000/api/v1/me`, {
      credentials: "include",
    });

    const user = await responce.json();

    dispatch(userSliceActions.addUser(user.data));
  };
  return (
    <div className=" flex  justify-center w-full">
      <nav className=" h-18 mt-3 mb-3 w-4/12 mx-5 fixed z-20 dark:bg-gray-800/30 backdrop-blur-md rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-gray-500/20 pointer-events-none rounded-full"></div>
        <div className="relative h-full flex items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="size-10" alt="Logo" />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              Crop Compass
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-black  bg-white  hover:bg-purple-200 font-medium rounded-full text-sm py-2 px-4 text-center"
            >
              {isLoggedIn ? (
                <Link to={"/user/dashboard"}>Get Started</Link>
              ) : (
                <Link to={"/user/login"}>Log In</Link>
              )}
            </button>
          </div>

          {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-transparent font-bold">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded-sm md:bg-transparent md:text-gray-50 md:p-0 md:dark:text-gray-50"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-50 md:p-0 md:dark:hover:text-gray-100 dark:text-white dark:hover:bg-purple-400 dark:hover:text-white md:dark:hover:bg-transparent "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-50 md:p-0 md:dark:hover:text-gray-100 dark:text-white dark:hover:bg-purple-400 dark:hover:text-white md:dark:hover:bg-transparent `0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-50 md:p-0 md:dark:hover:text-gray-50 dark:text-white dark:hover:bg-purple-400 dark:hover:text-white md:dark:hover:bg-transparent `0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
