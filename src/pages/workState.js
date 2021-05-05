import athlete from "../img/athlete-small.png";
import athlete2 from "../img/athlete2.png";
import theracer from "../img/theracer-small.png";
import theracer2 from "../img/the-racer2.png";

export const WorkState = () => {
  return [
    {
      title: "The Athlete",
      primaryImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Lorem, ipsum.",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          title: "Lorem, ipsum dolor.",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      title: "The Racer",
      primaryImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Lorem, ipsum.",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          title: "Lorem, ipsum dolor.",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
  ];
};

export default WorkState;
