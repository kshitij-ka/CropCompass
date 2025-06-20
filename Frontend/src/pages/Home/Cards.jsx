import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { t } from "../service/translation"; 

export const HeroSecn = ({ language = "en" }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
    <section className="py-40 w-full flex justify-center text-gray-100">
      <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
        <div className="container mx-auto flex flex-col justify-between h-full w-full">
          <div className="text-center md:text-start flex flex-col justify-around h-full">
            <h1 className="text-6xl md:text-6xl md:w-2/3 md:font-extrabold font-bold ">
              {t("hero_one_stop_solution", language)}
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
            alt={t("hero_plant_alt", language)}
          />
        </div>
      </div>
    </section>
  );
};

export const CardWithImage = ({ language = "en" }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://i.pinimg.com/736x/07/2b/5f/072b5f6a1630d919ceee1a8569683cf7.jpg"
          alt={t("card_with_image_alt", language)}
        />
      </a>
      <div className="p-6 backdrop-blur-md rounded-b-lg">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {t("card_with_image_title", language)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          {t("card_with_image_body", language)}
        </p>
        <a
          href="https://www.theguardian.com/world/2024/sep/30/high-tech-high-yields-the-kenyan-farmers-deploying-ai-to-increase-productivity"
          target="_blank"
          className="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl "
        >
          {t("card_with_image_read_more", language)}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const CardOnlyText = ({ headingText, bodyText, href, language = "en" }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className="block max-w-sm p-6 rounded-lg shadow-md backdrop-blur-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          {headingText}
        </h5>
        <p className="font-normal text-gray-50 dark:text-gray-400">{bodyText}</p>
      </a>
    </div>
  );
};

export const CardWithButton = ({ language = "en" }) => {
  return (
    <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a target="_blank" href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          {t("card_with_button_title", language)}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
        {t("card_with_button_body", language)}
      </p>
      <a
        href="https://www.reuters.com/sustainability/land-use-biodiversity/comment-how-empowering-smallholder-farmers-with-ai-tools-can-bolster-global-food-2025-01-10/"
        target="_blank"
        className="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl "
      >
        {t("card_with_button_read_more", language)}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
          className="rounded-lg"
          src="https://i.pinimg.com/736x/2b/2a/0f/2b2a0f7003bd3e4201573c1189d600de.jpg"
          alt={t("card_with_only_image_alt", language)}
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

export const CardLayout = ({ language = "en" }) => {
  return (
    <div>
      <HeroSecn language={language} />
      <div className="flex justify-center">
        <div className="flex justify-between py-8 w-5/6 ">
          <CardWithImage language={language} />
          <div className="flex flex-col gap-10 justify-between ">
            <CardOnlyText
              headingText={t("card_only_text_heading1", language)}
              bodyText={t("card_only_text_body1", language)}
              href="https://example.com/article1"
              language={language}
            />
            <CardWithButton language={language} />
          </div>
          <div className="flex flex-col justify-between">
            <CardWithOnlyImage language={language} />
            <CardOnlyText
              headingText={t("card_only_text_heading2", language)}
              bodyText={t("card_only_text_body2", language)}
              href="https://example.com/article2"
              language={language}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

