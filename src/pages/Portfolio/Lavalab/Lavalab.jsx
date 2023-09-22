import React from "react";
import useIsMobile from "../../../utils/useIsMobile";
import clsx from "clsx";
const Lavalab = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Lavalab</span>
          {!isMobile && (
            <span className="!justify-self-end">Los Angeles, California</span>
          )}
        </div>
        <span className="text-lg italic">Janruary 2022 - Present</span>
      </div>
      <div
        className={clsx("mt-4 flex", {
          "gap-x-2": !isMobile,
          "flex-col gap-y-2": isMobile,
        })}
      >
        <div className="">
          &emsp;Lavalab is a student-run entrepreneurial incubator program that
          runs over the course of a semester from ideation to demo-day. My team
          and I pitched Cora, an emotionally intelligent toy for children to
          help regulate emotions. It was great to wear so many hats in a short
          time from developer to pitch-deck maker. At the end of the semester my
          team and I pitched to a panel of venture capitalists and
          entrepreneurs. Here’s some pictures of Cora(nervous) who was a
          combination of a dollar-store stuffed animal and an Arduino Uno!
        </div>
        <div className="flex-0">
          <img
            className="aspect-square h-full w-full object-cover object-center"
            src="lavalab1.JPG"
            alt="cora"
          />
        </div>
      </div>
    </div>
  );
};

export default Lavalab;
