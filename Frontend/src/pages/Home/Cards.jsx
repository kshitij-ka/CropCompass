import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { Link } from "react-router-dom";

export const HeroSecn = () => {
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
    <section className=" py-40 w-full flex justify-center text-gray-100">
      <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
        <div className="container mx-auto flex flex-col justify-between h-full w-full">
          <div className="text-center md:text-start flex flex-col justify-around h-full">
            <h1 className="text-6xl md:text-6xl md:w-2/3 md:font-extrabold font-bold ">
              One stop solution for every farmer's need.
            </h1>
          </div>
          <button
            type="button"
            className="text-black w-auto max-w-lg  bg-white  hover:bg-purple-200 font-medium rounded-full text-sm py-2 px-4 text-center"
          ></button>
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
  );
};

export const CardWithImage = () => {
  return (
    <div className="max-w-sm   rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://i.pinimg.com/736x/07/2b/5f/072b5f6a1630d919ceee1a8569683cf7.jpg"
          alt="plant"
        />
      </a>
      <div className="p-6 backdrop-blur-md  rounded-b-lg">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            High tech, high yields?
          </h5>
        </a>
        <p className="mb-3 font-normal text-white  dark:text-gray-400">
          The Kenyan farmers deploying AI to increase productivity This article
          is more than 4 months old. AI apps are increasingly popular among
          small-scale farmers seeking to improve the quality and quantity of
          their crop.
        </p>
        <a
          href="https://www.theguardian.com/world/2024/sep/30/high-tech-high-yields-the-kenyan-farmers-deploying-ai-to-increase-productivity"
          target="_blank"
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
  );
};

export const CardOnlyText = (props) => {
  return (
    <div>
      <a
        href={props.href}
        target="_blank"
        className="block max-w-sm p-6 rounded-lg shadow-md backdrop-blur-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          {" "}
          {props.headingText}{" "}
        </h5>
        <p className="font-normal text-gray-50 dark:text-gray-400">
          {" "}
          {props.bodyText}{" "}
        </p>
      </a>
    </div>
  );
};

export const CardWithButton = () => {
  return (
    <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a target="_blank">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          Empowering smallholder farmers with AI tools can bolster global food
          security
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
        {" "}
        AI-powered weather forecasts help rural Indian farmers make informed
        planting decisions, reducing debt and boosting savings.
      </p>
      <a
        href="https://www.reuters.com/sustainability/land-use-biodiversity/comment-how-empowering-smallholder-farmers-with-ai-tools-can-bolster-global-food-2025-01-10/"
        target="_blank"
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
  );
};

export const CardWithOnlyImage = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a
        href="https://theprint.in/economy/telangana-is-the-success-story-of-indian-agritech-ai-tools-soil-testing-e-commerce-more/1630359/"
        target="_blank"
      >
        <img
          className=" rounded-lg"
          src="https://i.pinimg.com/736x/2b/2a/0f/2b2a0f7003bd3e4201573c1189d600de.jpg"
          alt="product image"
        />
      </a>
    </div>
  );
};

const cards = [
  HeroSecn,
  CardWithImage,
  CardOnlyText,
  CardWithButton,
  CardWithImage,
];

export default cards;

export const CardLayout = () => {
  return (
    <div>
      <HeroSecn />
      <div className=" flex justify-center">
        <div className=" flex justify-between  py-8 w-5/6 ">
          <cardWithImage />
          <div className="flex flex-col gap-10 justify-between ">
            <cardOnlyText />
            <cardWithButton />
          </div>

          <div className=" flex flex-col justify-between">
            <cardWithOnlyImage />
            <cardOnlyText />
          </div>
        </div>
      </div>
    </div>
  );
};
