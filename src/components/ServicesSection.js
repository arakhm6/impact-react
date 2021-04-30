import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import waves1 from "../img/waves1.jpeg";
//Styling
import styled from "styled-components";
import { About, Description, Image } from "../styles";

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
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
          <Logo>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </Logo>
        </Logos>
      </Description>
      <Image>
        <img src={waves1} alt="icon" />
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
    h3 {
      margin-left: 0.5rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
