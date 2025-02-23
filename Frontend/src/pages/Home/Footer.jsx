import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-50">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  className="h-9 rounded-full"
                  alt="Logo"
                />
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                  Crop Compass
                </span>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-50 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="/" className="hover:underline">
                Crop Compass™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
