import React from "react";

import Divider from "../../components/Divider";
import Card from "../../components/Card";

import PORTFOLIO_DATA from "../../constants/PORTFOLIO_DATA";
import PortfolioRow from "./PortfolioRow";

const Portfolio = () => {
  return (
    <Card>
      {PORTFOLIO_DATA.map((section, idx) => {
        return (
          <React.Fragment key={section.title}>
            <PortfolioRow
              title={section.title}
              location={section.location}
              date={section.date}
              body={section.body}
              src={section.src}
              alt={section.alt}
              imageFirst={idx % 2 === 1}
            >
              {section}
            </PortfolioRow>
            {idx !== section.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </Card>
  );
};

export default Portfolio;
