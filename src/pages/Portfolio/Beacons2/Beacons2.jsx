import React from "react";
import useIsMobile from "../../../utils/useIsMobile";

const Beacons2 = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Beacons 2.0</span>
          {!isMobile && (
            <span className="!justify-self-end">San Francisco, California</span>
          )}
        </div>
        <span className="text-lg italic">May 2023 - August 2023</span>
      </div>
      <div className="mt-4">
        <div>
          &emsp;I returned to Beacons the summer of 2023. Having interned there
          in the past, I really wanted to have new experiences. I started off
          working on the email marketing product, then switched teams to the
          store product.
        </div>
        <div>
          &emsp;Since I'd worked extensively with many members of the team, I
          got to work on many higher trust and risk tasks. I was also given
          tasks under my sole responsibility(DRI-Directly Responsible
          Individual). For example, I got to write the suspension system for the
          entire product complete with suspension audits, rule enforcement, and
          multiple frontend dashboards. I also added the first email
          notification system for the app and even contributed several new
          components to the Storybook library.
        </div>
      </div>
    </div>
  );
};

export default Beacons2;
