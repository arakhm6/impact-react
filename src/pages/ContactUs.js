import React from "react";
import Scroll from "../components/Scroll";

//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, slider } from "../Animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <FontAwesomeIcon icon={faFacebook} className="fb" size="3x" />
            <a target="_blank" href="http://facebook.com">
              <h2>Facebook</h2>{" "}
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <FontAwesomeIcon icon={faInstagram} className="insta" size="3x" />
            <a target="_blank" href="http://instagram.com">
              <h2>Instagram</h2>{" "}
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim} className="telegram">
            <FontAwesomeIcon
              icon={faTelegramPlane}
              className="telegram"
              size="3x"
            />
            <a target="_blank" href="http://telegram.org">
              <h2>Telegram</h2>{" "}
            </a>
          </Social>
        </Hide>
      </div>
      <Scroll />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: #353535;
  }
  a {
    text-decoration: none;
  }
  .fb {
    color: #1877f2;
  }
  .insta {
    color: #d83071;
  }
  .telegram {
    color: #34a9e1;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
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

export default ContactUs;
