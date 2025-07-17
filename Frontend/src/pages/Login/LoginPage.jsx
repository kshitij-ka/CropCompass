import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { userSliceActions } from "../../store/userSlice";
import { BACKEND_URL } from "../../constants";
import { t } from "../../service/translation";
import Message from "../../components/Message"; // Import Message component

const LoginPage = () => {
  const { language } = useOutletContext();
  const emailElement = useRef();
  const passwordElement = useRef();

  const [error, setError] = useState(""); // For showing errors

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous error
  
    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailElement.current.value,
          password: passwordElement.current.value,
        }),
      });
  
      if (response.status === 429) {
        setError("Too many login attempts. Please try again after 15 minutes.");
        return;
      }
  
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        setError("Unexpected server response. Please try again.");
        return;
      }
  
      if (data.success === true) {
        dispatch(userSliceActions.addUser(data.data));
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
  
      emailElement.current.value = "";
      passwordElement.current.value = "";
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-[url(/images/loginBG.png)] bg-cover font-sans  flex flex-col justify-center md:p-5  w-full min-h-screen max-h-screen">
      <div className="flex justify-between items-center h-full">
        <div className="rounded-lg shadow-md ">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-6xl font-bold text-white mb-4 md:text-6xl lg:text-9xl  ml-8">
              {t("login_welcome_back", language)}
            </h1>
          </div>
        </div>
        <div className="backdrop-blur-md bg-gradient-to-tr from-slate-300/10 to-slate-200/30 rounded-lg shadow-md lg:p-36">
          <h1 className="text-2xl font-bold text-gray-50 mb-4">{t("login_title", language)}</h1>
          <p className="text-gray-100 mb-6">{t("login_subtitle", language)}</p>

          {/* Show error message */}
          {error && (
            <div className="my-4">
              <Message message={error} type="error" />
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                {t("login_email_label", language)}
              </label>
              <input
                type="email"
                id="username"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("login_email_placeholder", language)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                {t("login_password_label", language)}
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("login_password_placeholder", language)}
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
                  className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300"
                >
                  {t("login_remember_me", language)}
                </label>
              </div>
              <Link
                to={"/user/forgetpassword"}
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                {t("login_forgot_password", language)}
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("login_button", language)}
              </button>
            </div>
            <p className="text-gray-100 text-center mt-4">
              {t("login_new_user", language)}{" "}
              <Link to={"/user/signup"} className="text-blue-600 hover:underline">
                {t("login_signup", language)}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
