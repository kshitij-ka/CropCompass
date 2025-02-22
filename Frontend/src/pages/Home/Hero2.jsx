import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardOnlyText, CardWithButton, CardWithImage, CardWithOnlyImage, HeroSecn, } from "./Cards";

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
    const myRef = document.querySelector('.scrollable-div')

  return (
    <div>
      <ScrollReveal direction='up'>
        <HeroSecn />
      </ScrollReveal>
      <div className=" flex justify-center">
        <div className=" flex justify-between  py-8 w-5/6 ">

          <ScrollReveal direction='up'>
            <CardWithImage />
          </ScrollReveal>
        
        <div className="flex flex-col gap-10 justify-between ">
          <ScrollReveal direction='up' > <CardOnlyText /> </ScrollReveal>
          <ScrollReveal direction='up'> <CardWithButton /> </ScrollReveal>
        </div>

        <div className=" flex flex-col justify-between">
          <ScrollReveal direction='up'> <CardWithOnlyImage /> </ScrollReveal>
          <ScrollReveal direction='up'> <CardOnlyText /> </ScrollReveal>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2