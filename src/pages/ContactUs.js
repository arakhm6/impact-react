import React from "react";
import Scroll from "../components/Scroll";

//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";
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
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <FontAwesomeIcon icon={faFacebook} className="fb" size="3x" />
            <a target="_blank" href="http://facebook.com">
              <h2 className="fb">Facebook</h2>{" "}
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <FontAwesomeIcon icon={faInstagram} className="insta" size="3x" />
            <a target="_blank" href="http://instagram.com">
              <h2 className="insta">Instagram</h2>{" "}
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
              <h2 className="telegram">Telegram</h2>{" "}
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
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
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
    :hover {
      color: #1877f2;
    }
  }
  .insta {
    :hover {
      color: #b800b2;
    }
  }
  .telegram {
    :hover {
      color: #34a9e1;
    }
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
