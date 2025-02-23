import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Hero2 from "./Hero2";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className=" bg-[url(/images/bgphoto.png)] bg-no-repeat bg-cover">
        <Hero2 />
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
