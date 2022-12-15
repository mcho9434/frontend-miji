import React from "react";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";
import Internships from "./Internships";

const Portfolio = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <Card>
      <div className="mb-4">
        This is the portfolio page! Here's a list of stuff I've worked on or
        been a part of in the past:
      </div>
      <Internships />
    </Card>
  );
};

export default Portfolio;
