import React from "react";

const Reviews = [
  [
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
  ],
  [
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
  ],
  [
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
  ],

  [
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
  ],

  [
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
    {
      src: "/images/Review1.jpeg",
      alt: "Bonnie image",
      name: "Bonnie",
      occupation: "Student",
      review:
        "As a student of this online education website, I can confidently say that it has been an incredible experience. The platform is user-friendly and making it easy for me to learn at my own pace.",
    },
  ],
];

const ReviewSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className=" text-2xl md:text-4xl font-bold mb-4">OUR TESTIMONIALS</h2>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              What Our Students Say About Us
            </h1>
          </div>

          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              {Reviews.map((reviewList) => (
                <div
                  className="hidden duration-700 ease-in-out w-full"
                  data-carousel-item
                >
                  <div className="flex w-full items-center justify-center h-full gap-8">
                    {/* Review no 1 */}

                    {reviewList.map((review) => (
                      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:py-2">
                        <div className="flex flex-col items-center pb-10 p-2">
                          <img
                            className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full shadow-lg"
                            src={`${review.src}`}
                            alt={`${review.alt}`}
                          />
                          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {review.name}
                          </h5>
                          <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                            {review.occupation}
                          </span>

                          <p className="md:hidden text-sm text-gray-600 text-center">
                            {review.review.substring(0, 35)}....
                          </p>

                          <p className="hidden md:block text-sm text-gray-600 text-center">
                            {review.review.substring(0,200)}...
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
