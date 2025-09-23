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
// import Navbar2 from "../../components/Navbar2";
import { t } from "../../service/translation"; 
import { useOutletContext } from "react-router-dom";

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

function Hero2(props) {
  // Get language from context if available, else from props, default to "en"
  const outletContext = useOutletContext?.();
  const language =
    (outletContext && outletContext.language) || props.language || "en";

  return (
    <div>
      
      <ScrollReveal direction="up">
        <HeroSecn language={language} />
      </ScrollReveal>
      <Testimonial language={language} />
      <div className="flex justify-center">
        <div className="flex justify-between py-8 w-5/6 ">
          <ScrollReveal direction="up">
            <CardWithImage language={language} />
          </ScrollReveal>

          <div className="flex flex-col gap-10 justify-between ">
            <ScrollReveal direction="up">
              <CardOnlyText
                headingText={t("hero2_card1_heading", language)}
                bodyText={t("hero2_card1_body", language)}
                href="https://www.weforum.org/impact/ai-for-agriculture-in-india/"
                language={language}
              />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <CardWithButton language={language} />
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-between">
            <ScrollReveal direction="up">
              <CardOnlyText
                headingText={t("hero2_card2_heading", language)}
                bodyText={t("hero2_card2_body", language)}
                href="https://arxiv.org/abs/2301.08405"
                language={language}
              />
            </ScrollReveal>
            <ScrollReveal direction="up">
              <CardWithOnlyImage language={language} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;

