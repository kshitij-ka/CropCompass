import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white py-12 w-full flex justify-center">
        <div className="flex flex-col md:flex-row justify-between w-10/12 h-auto">
          <div className="w-full md:w-4/5 object-contain flex justify-center items-center">
            <img src="/images/calender.png" className="w-full h-auto" alt="" />
          </div>
          <div className="container mx-auto flex flex-col justify-around h-full w-full md:py-10">
            <div className="text-center md:text-start flex flex-col justify-around h-full">
              <h2 className="text-xl font-bold mb-4 text-yellow-600">
                CUSTOMIZE WITH YOUR SCHEDULE
              </h2>
              <h1 className="text-2xl md:text-4xl md:font-extrabold font-bold mb-4">
                Personalized Professional Online Mentor on Your Schedule
              </h1>
              <p className="text-base mb-8">
                Our scheduling system allows you to select based on free time.
                Lorem ipsum demo text for template. Keep track of your students
                class and mentoring schedules, and never miss your Session. The
                best online class scheduling system with easy accessibility.
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
