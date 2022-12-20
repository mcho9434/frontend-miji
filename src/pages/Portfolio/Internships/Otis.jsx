import React from "react";
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
      <div>
        &emsp;I worked at{" "}
        <a
          className="underline font-semibold"
          href="https://www.otis.com/en/us/"
        >
          Otis
        </a>{" "}
        as a software engineering intern in the summer before my junior year.
        Otis is a large corporation focused on manufacturing elevators and
        escalators on an international scale, founded in 1852. I worked on the
        Compass360 team, writing code for destination entry terminals like the
        one below:
        <img
          className="m-auto aspect-square	w-96"
          src="det.jpg"
          alt="compass360 DET"
        />
        &emsp;As an intern, I was tasked with dealing with deprecation issues of
        the software behind the terminal. The code had originally been written
        in JDK6(released 2006), but faced serious security risks starting in
        2018. After trying to transpile the outdated codebase into a newer
        version of Java, I saw several roadblocks to a clean migration to a
        newer Java; many of the core features in the original code had been
        removed in newer versions, precluding a direct solution. Additionally,
        even if a translation was produced, it would be difficult to verify
        everything had carried over properly.
        <div>
          &emsp;As such, I took the initative to propose a React rewrite.
          Although key stakeholders were unknowing of React, I even took the
          time outside work to develop a short presentation to pitch this idea.
          Overall, the proposal was approved and I was successful in rewriting
          significant portions of the code, reducing paylod size by nearly 90%.
          I found it incredibly interesting to be coding for a uniquely hardware
          product, rather than the conventional pure software solutions I was
          used to.
        </div>
      </div>
      <div className="mt-2">
        <span className="font-semibold">Skills used: </span>
        <span>
          React, PHP, Java(JDK6, JDK17, JDK21, applets), embedded software
        </span>
      </div>
    </div>
  );
};

export default Otis;
