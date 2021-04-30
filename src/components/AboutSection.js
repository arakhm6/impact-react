import React from "react";
import waves from "../img/waves.jpeg";
//Styling
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          consectetur?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={waves} alt="waves" />
      </Image>
    </About>
  );
};

export default AboutSection;
