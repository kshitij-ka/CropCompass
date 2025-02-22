import React, { useRef, useState } from "react";
import { IoIosKey } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { BACKEND_URL } from "../../constants";

const ForgetPassword = () => {
  const emailElement = useRef();

  const [status, setStatus] = useState(false);

  const handleForgetPassword = async (event) => {
    event.preventDefault();

    const responce = await fetch(`${BACKEND_URL}/api/v1//password/forgot`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailElement.current.value,
      }),
    });

    const data = await responce.json();

    if (data.success === true) {
      setStatus(true);
    }
  };
  return (
    <div className="w-full h-[78vh] flex justify-center items-center">
      <div className="">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <IoIosKey className="text-5xl bg-purple-200 p-2 rounded-full text-purple-500" />
            <h2 className="text-3xl font-bold font-sans">Forget Password?</h2>
            <p className="text-gray-500">
              No worries, we'll send you resent instructions.
            </p>
          </div>
          <form
            className="flex flex-col w-full gap-5"
            onSubmit={handleForgetPassword}
          >
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border-gray-400 border-2"
                ref={emailElement}
              />
            </div>
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              {status === false ? "Send Email" : "Email Sent to your Mail"}
            </button>

            <Link
              to={"/user/login"}
              className="text-center text-gray-600 inline-flex items-center justify-center gap-2"
            >
              <FaArrowLeft className="text-lg" /> Back to Login Page
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
