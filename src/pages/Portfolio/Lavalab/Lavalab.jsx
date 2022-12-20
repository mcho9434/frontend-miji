import React from "react";
import useIsMobile from "../../../utils/useIsMobile";
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
        <span className="text-lg italic">January 2022 - Present</span>
      </div>
      <div className="mt-4">
        <div>
          &emsp;Lavalab is a entrepreneurial, product development student
          origanization that aims to get students from ideation to prototyping
          the span of a semseter. Teams of product managers, designers, and
          developers are paired up and go through the complete pipeline
          together.
        </div>
        <div>
          &emsp;I was a developer on my team, and we built an initial prototype
          for Cora, an emotionally intelligent toy for children to help regulate
          emotions. It was a great time to have hands on experience with many
          different spheres that I hadn't been able to before. I'd help write
          elevator pitches and think about marketing sizing on the product size,
          while going to makerspaces to solder and writing code for the toy as
          well. At the end of the semseter, Lavalab holds "Demo Day" in which
          all the teams get to present their idea and prototype.
        </div>
        <div className="mt-2">
          <span className="font-semibold">Skills used: </span>
          <span>Python, Arduino Uno, Product Analysis</span>
        </div>
      </div>
    </div>
  );
};

export default Lavalab;
