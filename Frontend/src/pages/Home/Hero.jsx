import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="bg-white py-12 w-full flex justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
          <div className="container mx-auto flex flex-col justify-between h-full w-full">
            <div className="text-center md:text-start flex flex-col gap-5 justify-around h-full">
              <h2 className="text-xl font-bold mb-4 text-yellow-600">
                100% SATISFACTION GUARANTEE
              </h2>
              <h1 className="text-6xl md:text-8xl md:font-extrabold font-bold mb-4">
                Find Your Perfect Mentor
              </h1>
              <div className="flex gap-4 justify-center md:justify-start">
                <form class="w-full md:w-3/5">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for mentors"
                      required
                    />
                    <Link
                      to={"/mentor"}
                      type="button"
                      class="text-white  absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    >
                      Find your Mentor
                    </Link>
                  </div>
                </form>

                {/* 
                <Link
                  to={"/mentor"}
                  type="button"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Find your Mentor
                </Link>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Contact Us
                </button> */}
              </div>
              <p className="text-lg mb-8 my-6">
                Find guidance, support, and industry insights from seasoned
                professionals. Achieve your goals with our mentorship
                platform.Our platform bridges the gap between students and
                experienced mentors.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/5 object-contain flex justify-center items-center">
            <img src="/images/student.png" className="w-full h-auto" alt="" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 mt-8">
        <div className="w-full p-4">
          <div className="bg-blue-500 rounded-lg p-6 text-center">
            <h3 className="text-white font-bold text-3xl mb-2">870</h3>
            <p className="text-white font-bold">Expert tutors</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-blue-500 rounded-lg p-6 text-center">
            <h3 className="text-white font-bold text-3xl mb-2">20,000+</h3>
            <p className="text-white font-bold">Hours tutored</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-blue-500 rounded-lg p-6 text-center">
            <h3 className="text-white font-bold text-3xl mb-2">298</h3>
            <p className="text-white font-bold">Subjects and courses</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-blue-500 rounded-lg p-6 text-center">
            <h3 className="text-white font-bold text-3xl mb-2">72,920</h3>
            <p className="text-white font-bold">Active students</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
