import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { WorkState } from "../pages/workState";
import Scroll from "../components/Scroll";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works, setWorks] = useState(WorkState);
  const [work, setWork] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    setWork(currentWork[0]);
  }, [works, url]);

  return (
    <>
      {work && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{work.title}</h2>
            <img src={work.primaryImg} alt="Main image" />
          </Headline>
          <Awards>
            {work.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <Scroll />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50% -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #91b960;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default WorkDetail;
