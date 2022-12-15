import React from "react";
import Card from "../../components/Card";
import Beacons from "./Beacons";
import Otis from "./Otis";
import useIsMobile from "../../utils/useIsMobile";
const Portfolio = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <Card>
      {isMobile}
      <div className="mb-4">
        This is the portfolio page! Here's a list of stuff I've worked on or
        been a part of in the past:
      </div>
      <div className="">
        <div className="bg-black h-px my-2" />
        <Beacons />
        <div className="bg-black h-px my-2" />
        <Otis />
      </div>
    </Card>
  );
};

export default Portfolio;
