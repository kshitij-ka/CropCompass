import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";

const SignupPage = () => {
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
        {/* <div className="bg-gradient-to-br from-purple-300 to-pink-200 rounded-lg shadow-md  min-h-40 object-center md:hidden">
          <div className="flex flex-col items-center justify-center h-full relative">
            <img
              src="/images/background1.jpg"
              alt=""
              className="absolute order-3 w-full h-full"
            />
            <h1 className="text-6xl font-bold text-white mb-4 md:text-6xl lg:text-9xl relative ml-8">
              Welcome to Crop Compass
            </h1>
          </div>
        </div> */}
        <div className="backdrop-blur-md bg-gradient-to-tr from-slate-300/10 to-slate-200/30 rounded-lg shadow-md lg:p-36 h-[95vh]">
          <h1 className="text-2xl font-bold text-gray-50 mb-4">
            Register Your account
          </h1>
          <p className="text-gray-100">Welcome to Crop Compass.</p>
          <p className="text-gray-100 mb-6">
            Please register your new account.
          </p>
          <form action="#" className="space-y-6" onSubmit={handleRegisteration}>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  ref={firstNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  ref={lastNameElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="At least 6 unique Characters.. "
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
                  Remember Me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              ></a>
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg   hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register your Account
              </button>
            </div>
            <p className="text-gray-600 text-center mt-4">
              Already have an Account ?{" "}
              <Link
                to={"/user/login"}
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="rounded-lg shadow-md text-center w-auto">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-6xl  font-bold text-white mb-4 md:text-6xl lg:text-9xl  ml-8">
              Start your Journey
              <br />
              with <br />
              Crop Compass
            </h1>
          </div>
        </div>
        {/* <div className=" backdrop-blur-sm  rounded-lg shadow-md md:block">
            <div className="flex flex-col items-center justify-center h-full relative text-center">
              <img
                src="/images/background1.jpg"
                alt=""
                className="absolute order-3 w-full h-full"
              />
              <h1 className="text-5xl font-bold text-white mb-4 md:text-5xl lg:text-8xl relative ml-8 text-center">
                Welcome to MentorFlux!
              </h1>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default SignupPage;
