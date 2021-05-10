import React from "react";
import home1 from "../img/home1.png";
//Styling
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../Animation";
import { useScroll } from "./useScroll";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeIn",
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const [element, controls] = useScroll();

  return (
    <About variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          consectetur?
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <motion.Image variants={imgAnim}>
        <img src={home1} alt="photographer" />
      </motion.Image>
    </About>
  );
};

export default AboutSection;
