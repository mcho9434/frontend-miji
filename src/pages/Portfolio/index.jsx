import React, { useState } from "react";
import CTC from "./CTC/CTC";
import Lavalab from "./Lavalab/Lavalab";
import Beacons from "./Beacons/Beacons";
import Beacons2 from "./Beacons2/Beacons2";
import Otis from "./Otis/Otis";
import Divider from "../../components/Divider";
import useIsMobile from "../../utils/useIsMobile";
import PortfolioHeader from "./PortfolioHeader";
import clsx from "clsx";
import BeaconsPreview from "./Beacons/BeaconsPreview";
import BeaconsPreview2 from "./Beacons2/BeaconsPreview2";
import CTCPreview from "./CTC/CTCPreview";
import LavalabPreview from "./Lavalab/LavalabPreview";
import OtisPreview from "./Otis/OtisPreview";

const Portfolio = () => {
  const [showTextView, setShowTextView] = useState(true);

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
          {/* {showExtracirriculars && <WebsitePreview />} */}
          {showInternships && <BeaconsPreview2 />}
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
      {/* {showExtracirriculars && (
        <>
          <Divider />
          <Website />
        </>
      )} */}
      {showInternships && (
        <>
          <Divider />
          <Beacons2 />
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
