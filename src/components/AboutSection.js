import React from "react";
import waves from "../img/waves.jpeg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          consectetur?
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={waves} alt="wave image" />
      </div>
    </div>
  );
};

export default AboutSection;
