import React, { useRef, useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { BACKEND_URL } from "../../constants";

const ResetPassword = () => {
  const [secure, setSecure] = useState(true);

  const newPassworElement = useRef();
  const confirmPassworElement = useRef();

  const navigate = useNavigate();

  const { token } = useParams();

 

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (
      confirmPassworElement.current.value !== newPassworElement.current.value
    ) {
      setSecure(false);
    } else {
      const responce = await fetch(
        `${BACKEND_URL}/api/v1/password/reset/${token}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPassworElement.current.value,
            confirmPassword: confirmPassworElement.current.value,
          }),
        }
      );

      const data = await responce.json();

      

      if (data.success === true) {
        navigate("/user/login");
      }
    }
  };

  return (
    <>
      <div className="w-full h-[78vh] flex justify-center items-center">
        <div className="">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <RiLockPasswordFill className="text-5xl bg-purple-200 p-2 rounded-full text-purple-500" />
              <h2 className="text-3xl font-bold font-sans">
                Create New Password
              </h2>
              <p className="text-gray-500">
                Create your new, unique and secure password here.
              </p>
            </div>
            <form
              className="flex flex-col w-full gap-5"
              onSubmit={handleResetPassword}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="passwordNew"
                  className="text-gray-500 font-semibold"
                >
                  New Password :
                </label>
                <input
                  type="password"
                  id="passwordNew"
                  ref={newPassworElement}
                  placeholder="Enter your New Password"
                  className="w-full rounded-md border-gray-400 border-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="passwordConfirm"
                  className="text-gray-500 font-semibold"
                >
                  Confirm Password :
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  ref={confirmPassworElement}
                  placeholder="Enter your Confirm Password"
                  className="w-full rounded-md border-gray-400 border-2"
                />
              </div>

              <p
                className={`text-red-800 text-sm underline w-96 text-center ${
                  secure && "hidden"
                } `}
              >
                Password and confirm Password is not same.Please Enter new
                password and confirm Password same
              </p>

              <button
                type="submit"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Reset Password
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
    </>
  );
};
export default ResetPassword;
