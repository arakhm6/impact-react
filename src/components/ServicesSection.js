import React from "react";
import home2 from "../img/home2.png";
//Styling
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faBusinessTime,
  faWallet,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Logos>
          <Logo>
            <div className="icon">
              <FontAwesomeIcon icon={faBusinessTime} size="2x" />
              <h3>Efficient</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <FontAwesomeIcon icon={faUserFriends} size="2x" />
              <h3>Teamwork</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <FontAwesomeIcon icon={faCogs} size="2x" />
              <h3>Diaphragm</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <FontAwesomeIcon icon={faWallet} size="2x" />
              <h3>Affordable</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
        </Logos>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    color: #0a7aa4;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
      text-align: left;
    }
    p {
      font-size: 1rem;
      margin-left: 1rem;
      padding: 1rem;
      text-align: right;
    }
  }
`;

export default ServicesSection;
