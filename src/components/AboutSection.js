import React from "react";
import home1 from "../img/home1.png";
//Styling & Framer motion
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slider, fade, imgAnim, pageAnimation } from "../Animation";
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
    <About
      variants={(fade, pageAnimation)}
      animate={(controls, "show")}
      initial="hidden"
      ref={element}
      exit="exit"
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Frame5 variants={slider}></Frame5>
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

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #bdff6d;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #eeeb48;
`;

const Frame3 = styled(Frame1)`
  background: #eca84e;
`;

const Frame4 = styled(Frame1)`
  background: #f1653a;
`;

const Frame5 = styled(Frame1)`
  background: #f13a3a;
`;

export default AboutSection;
