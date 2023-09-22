import React from "react";
import clsx from "clsx";
import useIsMobile from "../../../utils/useIsMobile";

const Otis = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Otis</span>
          {!isMobile && (
            <span className="!justify-self-end">Farmington, Connecticut</span>
          )}
        </div>
        <span className="text-lg italic">May 2022 - July 2022</span>
      </div>
      <div
        className={clsx("mt-4", {
          "flex gap-x-2": !isMobile,
          "flex flex-col gap-y-2": isMobile,
        })}
      >
        <div>
          &emsp;During my junior year's summer, I interned at Otis, a
          longstanding global company manufacturing elevators and escalators
          since 1852. Working with the Compass360 team, I focused on the
          software of destination entry terminals. These terminals faced
          deprecation issues due to their original code being written in JDK6.
          The security risks emerging from 2018 prompted me to address this
          challenge. Attempting to transpile the outdated code to a newer Java
          version presented obstacles, given the removal of core features in
          subsequent versions.
        </div>
        <div className="flex-0">
          <img
            className="aspect-square h-full w-full object-cover object-center"
            src="det.jpg"
            alt="compass360 det"
          />
        </div>
      </div>
      <div className="mt-2">
        <span className="font-semibold">Skills used: </span>
        <span>
          React, PHP, Java(JDK6, JDK17, JDK21, applets), Embedded Software
        </span>
      </div>
    </div>
  );
};

export default Otis;
