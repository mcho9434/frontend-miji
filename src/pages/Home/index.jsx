import React from "react";

const Home = () => {
  return (
    <div className="m-4">
      <div>
        &emsp;Hi I'm Matthew. Here is my website. Feel free to look around. As
        you can tell I am an engineer and not a designer. :)
      </div>
      <div className="mt-3">
        &emsp;This website hosts a variety of things, from a professional
        portfolio, a settlers of catan timer/visualizer.
      </div>
      <div className="mt-3">
        &emsp;Every part of this website was written from scratch, no webflow or
        website builders.
      </div>
      <div className="mt-3">
        &emsp;Here's the code to this site:{" "}
        <a
          className="underline font-semibold"
          href="https://github.com/mcho9434/matthew-portfolio"
        >
          GITHUB
        </a>
      </div>
    </div>
  );
};

export default Home;
