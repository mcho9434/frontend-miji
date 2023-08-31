import React from "react";
import Card from "../../components/Card";

const ResumeLanding = () => {
  return (
    <Card>
      <div className="flex m-4 gap-2">
        <div className="mt-3">
          <div>
            &emsp;Hi I'm Matthew. You're coming from my resume! I'm currently a
            senior at the University of Southern California studying computer
            science and entrepreneurship. In my free time, I'm a keyboard and
            pen enthusiast.
          </div>
          <div className="mt-2">
            &emsp;Here is my website! Feel free to look around. Beyond a couple
            MUI components, every part of this website was written from
            scratch(even the dice in Catan Buddy are made with flexbox :D).
          </div>
          <span className="mt-2 hover:font-bold flex">
            <a href="Matthew_Cho_Resume.pdf" target="_blank">
              Click here for a resume.
            </a>
          </span>
        </div>
        <img className="w-1/2 m-auto" src="matt.jpg" alt="CTC RFP" />
      </div>
    </Card>
  );
};

export default ResumeLanding;
