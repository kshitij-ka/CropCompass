import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderSliceActions } from "../../store/loaderSlice";
import { userSliceActions } from "../../store/userSlice";
import { BACKEND_URL } from "../../constants";

const Settings = () => {
  const nameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const confirmPassElement = useRef();

  const formData = new FormData();

  const [avatar, setAvatar] = useState();

  const user = useSelector((store) => store.user);

  const loader = useSelector((store) => store.loader);

  const dispatch = useDispatch();

  // Optimise the call for the database here you are refreshing the page again and again which makes read and write operation
  const handleAvatar = async (event) => {
    event.preventDefault();
    formData.append("avatar", avatar);

    if (avatar) {
      dispatch(loaderSliceActions.showLoader());

      const responce = await fetch(`${BACKEND_URL}/api/v1/user/avatar`, {
        method: "PUT",
        credentials: "include",
        body: formData,
      });

      const finalResponce = await responce.json();

      if (finalResponce.success) {
        dispatch(loaderSliceActions.hideLoader());

        dispatch(userSliceActions.addUser(finalResponce.data));

        window.location.reload();
      }
    }
  };

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
    <>
      <>
        <div className="w-full bg-white rounded-lg shadow p-4 min-h-[85vh]">
          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
              Update Your Avatar
            </h2>

            <div className="w-full h-auto flex items-center justify-center py-7">
              <div className="w-[9rem] h-[9rem] overflow-hidden rounded-full object-center">
                <img src={`/images/default1.png`} alt="Avatar" />
              </div>
            </div>
          </div>
          <form onSubmit={handleAvatar}>
            <div className="flex items-center justify-center w-full">
              <img src={formData.avatar && `${formData.avatar}`} alt="" />
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {avatar ? (
                      <span className="font-semibold">
                        Avatar uploaded successfully
                      </span>
                    ) : (
                      <span className="font-semibold">
                        Click to upload and press Upload button
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  <button
                    type="submit"
                    className="bg-gray-600 px-4 py-1 rounded-lg text-white font-semibold my-4"
                  >
                    Upload
                  </button>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </form>

          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
              Update Your Details
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name :
              </label>
              <input
                type="text"
                id="password"
                ref={nameElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Updated Name here.."
                required
              />
            </div>
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email :
              </label>
              <input
                type="email"
                id="username"
                ref={emailElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Updated Email here.."
                required
              />
            </div>
            {/* <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            </div> */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Change the Details
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center items-center my-10">
            <h2 className="text-2xl font-bold font-sans border-b-2 py-2">
              Update Your Password
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password :
              </label>
              <input
                type="password"
                id="password"
                ref={passwordElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your New Password to update.."
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password :
              </label>
              <input
                type="password"
                id="password"
                ref={confirmPassElement}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your New Password to update.."
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Change the Password
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default Settings;
