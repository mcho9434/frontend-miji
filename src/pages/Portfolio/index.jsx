import React, { useState } from "react";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";
import Internships from "./Internships";
import Extracirriculars from "./Extracirriculars";
const Portfolio = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  const [tabItem, setTabItem] = useState("internships");

  return (
    <Card>
      <div className="mb-2">
        This is the portfolio page! Here's a list of stuff I've worked on or
        been a part of in the past:
      </div>
      <div className="flex w-full gap-2 mb-4">
        <div
          className="p-2 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
          onClick={() => setTabItem("internships")}
        >
          Internships
        </div>
        <div
          className="p-2 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
          onClick={() => setTabItem("extracirriculars")}
        >
          Extracirriculars
        </div>
      </div>
      {tabItem === "internships" && <Internships />}
      {tabItem === "extracirriculars" && <Extracirriculars />}
    </Card>
  );
};

export default Portfolio;
