import React from "react";
import { IoMdContacts } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 px-2 md:px-32">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-4xl font-bold mb-4">WHY CHOOSE US</h2>
            <h1 className="text-3xl sm:text-6xl font-bold mb-4">
              Benefits of online tutoring services with us
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row  justify-center mt-8 h-auto">
            <div className="w-full h-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 text-start shadow-md flex flex-col gap-2">
                <IoMdContacts className=" text-4xl p-1 rounded-lg text-white bg-blue-600 " />

                <h3 className="text-xl font-bold mb-2">One-on-One Mentoring</h3>
                <p className="text-gray-600 text-sm">
                  All of our special education experts have a degree in special
                  education
                </p>
              </div>
            </div>

            <div className="w-full h-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 text-start shadow-md flex flex-col gap-2">
                <FaClock className=" text-4xl p-1.5 rounded-lg text-white bg-green-600 " />

                <h3 className="text-xl font-bold mb-2">24/7 Mentor Availability</h3>
                <p className="text-gray-600 text-sm">
                  Our Mentors are always available to respond as quick as
                  possible for you
                </p>
              </div>
            </div>

            <div className="w-full h-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 text-start shadow-md flex flex-col gap-2">
                <FaMessage className=" text-4xl p-2 rounded-lg text-white bg-orange-600 " />

                <h3 className="text-xl font-bold mb-2">Interactive Session</h3>
                <p className="text-gray-600 text-sm">
                  Our digital messaging with audio and video chat features give interactiveness.
                </p>
              </div>
            </div>

            {/* <div class="w-full md:w-1/3 p-4">
          <div class="bg-white rounded-lg p-6 text-center shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2768/2768851.png"
              alt="Icon"
              class="w-12 h-12 mb-4"
            />
            <h3 class="text-2xl font-bold mb-2">Interactive Whiteboard</h3>
            <p class="text-gray-600">
              Our digital whiteboard equipped with audio and video chat
              features
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="bg-white rounded-lg p-6 text-center shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2768/2768851.png"
              alt="Icon"
              class="w-12 h-12 mb-4"
            />
            <h3 class="text-2xl font-bold mb-2">Affordable Prices</h3>
            <p class="text-gray-600">
              Choose an expert tutor based on your budget and per hour
            </p>
          </div>
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
