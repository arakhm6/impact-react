import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, imgAnim, pageAnimation, lineAnim, slider } from "../Animation";
import { useScroll } from "../components/useScroll";

//Images
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Frame5 variants={slider}></Frame5>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <Link to="/work/the-athlete">
          <motion.div className="line" variants={lineAnim}></motion.div>
          <Hide>
            <motion.img variants={imgAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <Link to="/work/the-racer">
          <motion.div className="line" variants={lineAnim}></motion.div>
          <img src={racer} alt="racer" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #91b960;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    font-family: "PT Sans", cursive;
    font-weight: lighter;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

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

export default OurWork;
