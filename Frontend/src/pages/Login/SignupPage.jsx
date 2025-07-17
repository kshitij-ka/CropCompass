import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";
import { t } from "../../service/translation";
import { useOutletContext } from "react-router-dom";
import { isPasswordPwned } from "../../utils/passwordUtils";

const SignupPage = (props) => {
  const outletContext = useOutletContext?.();
  const language = (outletContext && outletContext.language) || props.language || "en";

  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const confirmPasswordElement = useRef();

  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const evaluatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score <= 2) return "Weak";
    if (score === 3 || score === 4) return "Moderate";
    return "Strong";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    passwordElement.current.value = pwd;
    setPasswordStrength(evaluatePasswordStrength(pwd));
  };

  const handleRegisteration = async (event) => {
    event.preventDefault();
    setError("");

    const password = passwordElement.current.value;
    const confirmPassword = confirmPasswordElement.current.value;

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const pwned = await isPasswordPwned(password);
      if (pwned) {
        setError("This password previously appeared in a data breach. Please use a new password.");
        setLoading(false);
        return;
      }
    } catch (err) {
      console.error("Password breach check failed:", err);
      setError("Something went wrong while checking password security. Try again.");
      setLoading(false);
      return;
    }

    const user = {
      name: `${firstNameElement.current.value} ${lastNameElement.current.value}`,
      email: emailElement.current.value,
      password: password,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    confirmPasswordElement.current.value = "";
    setPasswordStrength("");
    setLoading(false);
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder={t("signup_email_placeholder", language)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100">
                {t("signup_password_label", language)}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  ref={passwordElement}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10"
                  placeholder={t("signup_password_placeholder", language)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-2 text-sm text-blue-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Password Strength */}
              {passwordStrength && (
                <>
                  <div className="mt-2 text-sm font-medium">
                    Password strength:{" "}
                    <span
                      className={
                        passwordStrength === "Weak"
                          ? "text-red-500"
                          : passwordStrength === "Moderate"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }
                    >
                      {passwordStrength}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded bg-gray-200 mt-1">
                    <div
                      className={`h-2 rounded transition-all duration-300 ${
                        passwordStrength === "Weak"
                          ? "bg-red-500 w-1/4"
                          : passwordStrength === "Moderate"
                          ? "bg-yellow-500 w-2/4"
                          : "bg-green-500 w-full"
                      }`}
                    ></div>
                  </div>
                </>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-100">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  ref={confirmPasswordElement}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-2 top-2 text-sm text-blue-500"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            {loading && (
              <div className="flex justify-center text-white font-medium">
                Checking if password was leaked...
                <div className="ml-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`text-white w-1/2 backdrop-blur-lg bg-gradient-to-tr from-slate-100/15 to-slate-200/15 shadow-lg hover:backdrop-blur-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
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
