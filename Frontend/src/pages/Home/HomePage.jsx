import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import About from "./About";
import Customization from "./Customization";
import SubjectSection from "./SubjectSection";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className=" bg-[url(/images/bgphoto.png)] bg-no-repeat bg-cover">
        <Hero />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
