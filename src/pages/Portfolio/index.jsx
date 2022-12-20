import React, { useState } from "react";
import CTC from "./CTC/CTC";
import Lavalab from "./Lavalab/Lavalab";
import Beacons from "./Beacons/Beacons";
import Otis from "./Otis/Otis";
import Divider from "../../components/Divider";
import useIsMobile from "../../utils/useIsMobile";
import PortfolioHeader from "./PortfolioHeader";
import clsx from "clsx";
import BeaconsPreview from "./Beacons/BeaconsPreview";
import CTCPreview from "./CTC/CTCPreview";
import LavalabPreview from "./Lavalab/LavalabPreview";
import OtisPreview from "./Otis/OtisPreview";
import WebsitePreview from "./Website/WebsitePreview";

const Portfolio = () => {
  const [showTextView, setShowTextView] = useState(false);

  const [showInternships, setShowInternships] = useState(true);
  const [showExtracirriculars, setShowExtracirriculars] = useState(true);
  const [showHobbies, setShowHobbies] = useState(false);

  const isMobile = useIsMobile();

  if (!showTextView) {
    return (
      <PortfolioHeader
        showTextView={showTextView}
        setShowTextView={setShowTextView}
        showInternships={showInternships}
        setShowInternships={setShowInternships}
        showExtracirriculars={showExtracirriculars}
        setShowExtracirriculars={setShowExtracirriculars}
        showHobbies={showHobbies}
        setShowHobbies={setShowHobbies}
      >
        <Divider />
        <div
          className={clsx("grid gap-4", {
            "grid-cols-3": !isMobile,
            "grid-cols-2": isMobile,
          })}
        >
          {showExtracirriculars && <WebsitePreview />}
          {showInternships && <BeaconsPreview />}
          {showInternships && <OtisPreview />}
          {showExtracirriculars && <LavalabPreview />}
          {showExtracirriculars && <CTCPreview />}
        </div>
      </PortfolioHeader>
    );
  }

  return (
    <PortfolioHeader
      showTextView={showTextView}
      setShowTextView={setShowTextView}
      showInternships={showInternships}
      setShowInternships={setShowInternships}
      showExtracirriculars={showExtracirriculars}
      setShowExtracirriculars={setShowExtracirriculars}
      showHobbies={showHobbies}
      setShowHobbies={setShowHobbies}
    >
      {!showInternships && !showExtracirriculars && !showHobbies && (
        <>
          <Divider />
          <div>Nothing to show... Select a category above!</div>
        </>
      )}
      {showInternships && (
        <>
          <Divider />
          <Beacons />
        </>
      )}
      {showInternships && (
        <>
          <Divider />
          <Otis />
        </>
      )}
      {showExtracirriculars && (
        <>
          <Divider />
          <Lavalab />
        </>
      )}
      {showExtracirriculars && (
        <>
          <Divider />
          <CTC />
        </>
      )}
    </PortfolioHeader>
  );
};

export default Portfolio;
