const Navbar2 = () => {
    return (
    <div className=" flex  justify-center rounded-full">
      <nav className=" h-18 mt-3 mb-3 w-[97.5%] mx-5 fixed z-20 dark:bg-gray-800/30 backdrop-blur-md rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-gray-500/20 pointer-events-none rounded-full"></div>
        <div className="relative h-full flex items-center justify-between p-4">

          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.png"
              className="size-10"
              alt="Logo"
            />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              Crop Compass
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-black  bg-white  hover:bg-purple-200 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-full text-sm py-2 px-4 text-center"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 mt-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-purple-400 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
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
          <div
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
          </div>
        </div>
      </nav>
    </div>
    );
  };
  
  export default Navbar2;
  