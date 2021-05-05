import React from "react";
import home1 from "../img/home1.png";
//Styling
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

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
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    <About>
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          consectetur?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="photographer" />
      </Image>
    </About>
  );
};

export default AboutSection;
