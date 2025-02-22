
import React from "react";

export const HeroSecn = () =>{
    return(
        <section className=" py-40 w-full flex justify-center text-gray-100">
        <div className="flex flex-col-reverse md:flex-row justify-between w-10/12 h-auto">
          <div className="container mx-auto flex flex-col justify-between h-full w-full">
            <div className="text-center md:text-start flex flex-col justify-around h-full">
              <h1 className="text-6xl md:text-6xl md:w-2/3 md:font-extrabold font-bold">
                Anything and Everything you Need to know About
              </h1>
              <p className="text-2xl font-semibold mb-8 ">
                Your crops and their Health!
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/5 object-contain flex justify-center items-center">
            <img src="/images/plant.png" className="w-full h-auto rounded-3xl shadow-xl" alt="plant" />
          </div>
        </div>
      </section>
    )
}

export const CardWithImage = () => {
    return (
        <div class="max-w-sm  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="https://i.pinimg.com/736x/07/2b/5f/072b5f6a1630d919ceee1a8569683cf7.jpg" alt="plant" />
              </a>
              <div class="p-6 backdrop-blur-md  rounded-b-lg">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Excellent Dashboards</h5>
                  </a>
                  <p class="mb-3 font-normal text-white  dark:text-gray-400">Our descriptive dashboards give insights into your crop's health and keeps track of your burning expenses</p>
                  <a href="#" class="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl ">
                      Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
        </div>
    )
}

export const CardOnlyText = () => {
    return(
        <div>
              <a href="#" class="block max-w-sm p-6 rounded-lg shadow-md backdrop-blur-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="font-normal text-gray-50 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </a>
        </div>
    )
}

export const CardWithButton = () => {
    return(
        <div class="max-w-sm p-6 backdrop-blur-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-50 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex shadow-md backdrop-blur-md bg-gradient-to-tr from-gray-700/20 to-gray-50/20 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:backdrop-blur-xl ">
                      Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
            </div>
    )
}

export const CardWithOnlyImage = () => {
    return(
        <div class="w-full max-w-sm bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class=" rounded-lg" src="/images/plant.png" alt="product image" />
            </a>
        </div>
    )
}

const cards = [HeroSecn, CardWithImage, CardOnlyText, CardWithButton, CardWithImage];

export default cards;


export const CardLayout = () => {
    return(
        <div>
            <HeroSecn />
            <div className=" flex justify-center">
                <div className=" flex justify-between  py-8 w-5/6 ">     
                <cardWithImage />
                <div className="flex flex-col gap-10 justify-between ">
                    <cardOnlyText />
                    <cardWithButton />
                </div>

                <div className=" flex flex-col justify-between">
                    <cardWithOnlyImage />
                    <cardOnlyText />
                </div>
                </div>
            </div>
        </div>
    )
}