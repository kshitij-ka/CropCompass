import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSliceActions } from "../../store/userSlice";
import { BACKEND_URL } from "../../constants";

const LoginPage = () => {
  const emailElement = useRef();
  const passwordElement = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const responce = await fetch(`${BACKEND_URL}/api/v1/login`, {
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

    const user = await responce.json();

    dispatch(userSliceActions.addUser(user.data));

    emailElement.current.value = "";
    passwordElement.current.value = "";

    if (user.success == true) {
      navigate("/");
    }
  };

  return (
    <section className="bg-[url(/images/loginBG.png)] bg-cover font-sans  flex flex-col justify-center md:p-5  w-full min-h-screen max-h-screen">
      <div className="flex justify-between items-center h-full">
        <div className="   rounded-lg shadow-md ">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-6xl  font-bold text-white mb-4 md:text-6xl lg:text-9xl  ml-8">
              Welcome Back!
            </h1>
          </div>
        </div>
        <div className=" backdrop-blur-md bg-gradient-to-tr from-slate-300/10 to-slate-200/30 rounded-lg shadow-md lg:p-36">
          <h1 className="text-2xl font-bold text-gray-50 mb-4">Login</h1>
          <p className="text-gray-100 mb-6">
            Welcome back! Please login to your account.
          </p>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="********"
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
                  for="remember_me"
                  className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300"
                >
                  Remember Me
                </label>
              </div>
              <Link
                to={"/user/forgetpassword"}
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg   hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
            <p className="text-gray-100 text-center mt-4">
              New User?{" "}
              <Link
                to={"/user/signup"}
                className="text-blue-600 hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
