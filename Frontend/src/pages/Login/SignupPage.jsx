import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";
import { t } from "../../service/translation";
import { useOutletContext } from "react-router-dom";
import { isPasswordPwned } from "../../utils/passwordUtils";

const SignupPage = (props) => {
  const outletContext = useOutletContext?.();
  const language =
    (outletContext && outletContext.language) || props.language || "en";

  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegisteration = async (event) => {
    event.preventDefault();
    setError("");

    const password = passwordElement.current.value;

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      const pwned = await isPasswordPwned(password);
      if (pwned) {
        setError("This password previously appeared in a data breach. Please use a new password.");
        return;
      }
    } catch (err) {
      console.error("Password breach check failed:", err);
      setError("Something went wrong while checking password security. Try again.");
      return;
    }

    const user = {
      name:
        firstNameElement.current.value + " " + lastNameElement.current.value,
      email: emailElement.current.value,
      password: password,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success === true) {
        navigate("/user/login");
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Something went wrong on the server. Please try again later.");
    }

    firstNameElement.current.value = "";
    lastNameElement.current.value = "";
    emailElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <section className="bg-[url(https://i.pinimg.com/736x/6c/d2/cc/6cd2cc05a7e464a78bdf1124b4ad30f1.jpg)] bg-cover font-sans flex flex-col justify-center min-h-screen max-h-screen">
      <div className="flex justify-between items-center w-full h-full p-5">
        <div className="backdrop-blur-md bg-gradient-to-tr from-slate-300/10 to-slate-200/30 rounded-lg shadow-md lg:p-36 h-[95vh]">
          <h1 className="text-2xl font-bold text-gray-50 mb-4">
            {t("signup_register_heading", language)}
          </h1>
          <p className="text-gray-100">{t("signup_welcome", language)}</p>
          <p className="text-gray-100 mb-6">{t("signup_subtitle", language)}</p>
          <form className="space-y-6" onSubmit={handleRegisteration}>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="w-full">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-100">
                  {t("signup_first_name_label", language)}
                </label>
                <input
                  type="text"
                  id="firstName"
                  ref={firstNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={t("signup_first_name_placeholder", language)}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-100">
                  {t("signup_last_name_label", language)}
                </label>
                <input
                  type="text"
                  id="lastName"
                  ref={lastNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={t("signup_last_name_placeholder", language)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">
                {t("signup_email_label", language)}
              </label>
              <input
                type="email"
                id="email"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={t("signup_email_placeholder", language)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100">
                {t("signup_password_label", language)}
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={t("signup_password_placeholder", language)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
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
          <div className="flex flex-col items-center justify-center h-full">
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
