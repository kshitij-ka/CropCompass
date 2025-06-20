import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";
import { t } from "../../service/translation";
import { useOutletContext } from "react-router-dom";

const SignupPage = (props) => {
  const outletContext = useOutletContext?.();
  const language =
    (outletContext && outletContext.language) || props.language || "en";

  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const emailElement = useRef();
  const roleElement = useRef();
  const passwordElement = useRef();

  const navigate = useNavigate();

  const handleRegisteration = async (event) => {
    event.preventDefault();

    const user = {
      name:
        firstNameElement.current.value + " " + lastNameElement.current.value,
      email: emailElement.current.value,
      password: passwordElement.current.value,
    };

    event.preventDefault();

    const responce = await fetch(`${BACKEND_URL}/api/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });
    const data = await responce.json();

    firstNameElement.current.value = "";
    lastNameElement.current.value = "";
    emailElement.current.value = "";
    passwordElement.current.value = "";

    if (data.success == true) {
      navigate("/user/login");
    }
  };

  return (
    <section className="bg-[url(https://i.pinimg.com/736x/6c/d2/cc/6cd2cc05a7e464a78bdf1124b4ad30f1.jpg)] bg-cover font-sans flex flex-col justify-center min-h-screen max-h-screen">
      <div className="flex justify-between items-center w-full h-full p-5">
        <div className="backdrop-blur-md bg-gradient-to-tr from-slate-300/10 to-slate-200/30 rounded-lg shadow-md lg:p-36 h-[95vh]">
          <h1 className="text-2xl font-bold text-gray-50 mb-4">
            {t("signup_register_heading", language)}
          </h1>
          <p className="text-gray-100">{t("signup_welcome", language)}</p>
          <p className="text-gray-100 mb-6">
            {t("signup_subtitle", language)}
          </p>
          <form action="#" className="space-y-6" onSubmit={handleRegisteration}>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  {t("signup_first_name_label", language)}
                </label>
                <input
                  type="text"
                  id="firstName"
                  ref={firstNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={t("signup_first_name_placeholder", language)}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  {t("signup_last_name_label", language)}
                </label>
                <input
                  type="text"
                  id="LastName"
                  ref={lastNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={t("signup_last_name_placeholder", language)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                {t("signup_email_label", language)}
              </label>
              <input
                type="email"
                id="email"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("signup_email_placeholder", language)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("signup_password_label", language)}
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("signup_password_placeholder", language)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t("signup_remember_me", language)}
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("signup_register_button", language)}
              </button>
            </div>
            <p className="text-gray-600 text-center mt-4">
              {t("signup_already_have_account", language)}{" "}
              <Link to={"/user/login"} className="text-blue-600 hover:underline">
                {t("signup_login", language)}
              </Link>
            </p>
          </form>
        </div>

        <div className="rounded-lg shadow-md text-center w-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-6xl font-bold text-white mb-4 md:text-6xl lg:text-9xl ml-8">
              {t("signup_journey_heading", language)}
              <br />
              {t("signup_with", language)}
              <br />
              Crop Compass
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
