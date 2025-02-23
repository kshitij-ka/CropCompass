import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className=" py-12 w-full flex justify-center pt-28 text-gray-100">
        <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
          <div className="container mx-auto flex flex-col justify-between h-full w-full">
            <div className="text-center md:text-start flex flex-col justify-around h-full">
              <h1 className="text-6xl md:text-6xl md:w-2/3 md:font-extrabold font-bold">
                Anything and Everything you Need to know About
              </h1>
              <p className="text-2xl font-semibold mb-8 ">
                Your crops and their Health!
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/5 object-contain flex justify-center items-center">
            <img
              src="/images/plant.png"
              className="w-full h-auto rounded-3xl shadow-xl"
              alt="plant"
            />
          </div>
        </div>
      </section>

      <div className=" flex justify-center">
        <div className=" flex justify-between  py-8 w-5/6 ">
          <div className="max-w-sm  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/images/plant.png"
                alt="plant"
              />
            </a>
            <div className="p-8 backdrop-blur-md  rounded-b-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-white  dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-between ">
            <div>
              <a
                href="#"
                className="block max-w-sm p-6 rounded-lg shadow-md backdrop-blur-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-50 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className=" flex flex-col justify-between">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className=" rounded-lg"
                  src="/images/plant.png"
                  alt="product image"
                />
              </a>
            </div>

            <div>
              <a
                href="#"
                className="block max-w-sm p-6 backdrop-blur-xl rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-50 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

// {grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2}
