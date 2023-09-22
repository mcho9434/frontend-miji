import React from "react";
import clsx from "clsx";
import useIsMobile from "../../../utils/useIsMobile";

const CTC = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Code the Change</span>
          {!isMobile && (
            <span className="!justify-self-end">Los Angeles, California</span>
          )}
        </div>
        <span className="text-lg italic">August 2020 - Present</span>
      </div>
      <div
        className={clsx("mt-4 flex", {
          "gap-x-2": !isMobile,
          "flex-col gap-y-2": isMobile,
        })}
      >
        <div className="items-center">
          &emsp;Code the Change is a group of self-driven students engaged in
          the pro-bono development of products for LA-based nonprofits. I’ve
          been a member since I was a freshman and have taken on a plethora of
          roles, everything from entry-level developer to tech lead to head of
          product. I’ve worked with everything from non-profits focused on urban
          gardening to preventing human trafficking. It’s been awesome to work
          with like minded peers and local non-profits. Here’s a picture of my
          team and I in an urban garden in Los Angeles!
        </div>
        <div className="flex-0">
          <img
            className="aspect-square h-full w-full object-cover object-center"
            src="CTC.jpg"
            alt="CTC RFP"
          />
        </div>
      </div>
    </div>
  );
};

export default CTC;
