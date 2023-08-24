import React from "react";
import Card from "../../components/Card";
import { Switch } from "@mui/material";

import useIsMobile from "../../utils/useIsMobile";
import clsx from "clsx";
import Divider from "../../components/Divider";

const PortfolioHeader = ({
  showTextView,
  setShowTextView,
  showInternships,
  setShowInternships,
  showExtracirriculars,
  setShowExtracirriculars,
  showHobbies,
  setShowHobbies,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <Card>
      <div className="mb-2">
        This is the portfolio page! Here's a list of the major stuff I've done
        during my time as an undergraduate and some ways to look and
        filter!
      </div>
      <Divider />
      <div
        className={clsx({
          "flex w-full gap-2 justify-around": !isMobile,
          "grid grid-cols-2 gap-4": isMobile,
        })}
      >
        <div className="flex items-center p-2">
          <div>Show text view:</div>
          <Switch
            checked={showTextView}
            onChange={() => {
              setShowTextView((prev) => {
                return !prev;
              });
            }}
          />
        </div>
        <div className="flex items-center p-2">
          <div>Internships:</div>
          <Switch
            checked={showInternships}
            onChange={() => {
              setShowInternships((prev) => {
                return !prev;
              });
            }}
            color="primary"
          />
        </div>
        <div className="flex items-center p-2">
          <div>Extracirriculars:</div>
          <Switch
            checked={showExtracirriculars}
            onChange={() => {
              setShowExtracirriculars((prev) => {
                return !prev;
              });
            }}
          />
        </div>
        <div className="flex items-center p-2">
          <div>Hobbies:</div>
          <Switch
            checked={showHobbies}
            onChange={() => {
              setShowHobbies((prev) => {
                return !prev;
              });
            }}
          />
        </div>
      </div>
      {children}
    </Card>
  );
};

export default PortfolioHeader;
