import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CardOnlyText,
  CardWithButton,
  CardWithImage,
  CardWithOnlyImage,
  HeroSecn,
} from "./Cards";
import Testimonial from "./Testimonial";
import Navbar2 from "../../components/Navbar2";

const ScrollReveal = ({ children, direction = "left" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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

function Hero2() {
  const myRef = document.querySelector(".scrollable-div");

  return (
    <div>
      <Navbar2 />
      <ScrollReveal direction="up">
        <HeroSecn />
      </ScrollReveal>
      <Testimonial />
      <div className=" flex justify-center">
        <div className=" flex justify-between  py-8 w-5/6 ">
          <ScrollReveal direction="up">
            <CardWithImage />
          </ScrollReveal>

          <div className="flex flex-col gap-10 justify-between ">
            <ScrollReveal direction="up">
              {" "}
              <CardOnlyText
                headingText={
                  "AI for agriculture: How Indian farmers are harvesting innovation"
                }
                bodyText={
                  "Farmers participating in the programme saw a 21% increase in chili yields per acre, a 9% reduction in pesticide use, a 5% decrease in fertilizer usage, and an 8% improvement in unit prices due to quality enhancements."
                }
                href={
                  "https://www.weforum.org/impact/ai-for-agriculture-in-india/ "
                }
              />{" "}
            </ScrollReveal>
            <ScrollReveal direction="up">
              {" "}
              <CardWithButton />{" "}
            </ScrollReveal>
          </div>

          <div className=" flex flex-col justify-between">
            <ScrollReveal direction="up">
              {" "}
              <CardOnlyText
                headingText={
                  "SugarChain: Blockchain technology meets Agriculture"
                }
                bodyText={
                  "The use of blockchain technology can help farmers automate processes with high trust, addressing issues like middlemen involvement and ensuring accurate compensation for their products"
                }
                href={"https://arxiv.org/abs/2301.08405"}
              />{" "}
            </ScrollReveal>
            <ScrollReveal direction="up">
              {" "}
              <CardWithOnlyImage />{" "}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
