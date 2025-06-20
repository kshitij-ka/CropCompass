import React from "react";
import { t } from "../../service/translation"; 
import { useOutletContext } from "react-router-dom";

const Footer = (props) => {
  // Get language from context if available, else from props, default to "en"
  const outletContext = useOutletContext?.();
  const language =
    (outletContext && outletContext.language) || props.language || "en";

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
                  alt={t("footer_logo_alt", language)}
                />
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                  {t("footer_brand", language)}
                </span>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-50 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="/" className="hover:underline">
                {t("footer_brand", language)}™
              </a>
              . {t("footer_rights_reserved", language)}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

