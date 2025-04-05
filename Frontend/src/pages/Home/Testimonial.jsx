import React from "react";
import { IoMdContacts } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypeWriterEffect from "react-typewriter-effect";
import cards from "./Cards";

const ScrollReveal = ({ children, direction = "left" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const variants = {
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    up: { opacity: 0, y: 100 },
    down: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Testimonial = () => {
  const myRef = document.querySelector(".scrollable-div");

  return (
    <>
      <section className=" py-12 px-2 md:px-32  text-white">
        <div className="container mx-auto min-h-[20]">
          <div className="text-center flex-col justify-center align-middle  min-h-full">
            <ScrollReveal direction="up">
              <h2 className="text-xl sm:text-4xl font-bold mb-4 drop-shadow-md">
                WHY CHOOSE US?
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <h1 className="text-3xl text-center sm:text-6xl text-white drop-shadow-[10px_10px_10px_rgba(0,0,0,0.25)] font-bold mb-4">
                <TypeWriterEffect
                  width="230"
                  trackWidth="13"
                  scrollArea={myRef}
                  startDelay={100}
                  cursorColor="white"
                  text="⠀Unparalled management for crops & farms."
                  typeSpeed={100}
                />
              </h1>
            </ScrollReveal>
          </div>

          <div className="flex flex-col sm:flex-row  justify-around mt-8 h-auto min-h-[50]">
            <ScrollReveal direction="up">
              <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  src="/images/dashboard.png"
                  alt="dashboard"
                  className="w-7 h-7"
                ></img>
                <a href="/user/dashboard/">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white">
                    Excellent Dashboards
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
                  Our descriptive dashboards give insights into your crop's
                  health and keeps track of your burning expenses.
                </p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  Check Out
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pb-13">
                <img src="/images/crops.png" className="w-7 h-7" alt="" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white">
                    {" "}
                    Crop Disease Prediction{" "}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
                  Predict the possible crop diseases based on their shown
                  symptoms.
                </p>
                <a
                  href="/ai"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  Check Out
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src="/images/planner.png" className="w-7 h-7" alt="" />
                <a href="/user/dashboard/monitoring">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white">
                    Crop Planner
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-50 dark:text-gray-400">
                  Based on previous season's crop and used pertilizers and
                  pesticides, plan what crops would best suit the present state
                  of your soil.
                </p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  Check Out
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
