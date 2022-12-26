import React from "react";
import Card from "../../components/Card";
const Home = () => {
  return (
    <Card>
      <div className="m-4">
        <div>
          &emsp;Hi I'm Matthew. Here is my website. Feel free to look around. As
          you can tell I am an engineer and not a designer. :)
        </div>
        <div className="mt-3">
          &emsp;Beyond a couple MUI components, every part of this website was
          written from scratch(even the dice in Catan Buddy are made with
          flexbox :D).
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
    </Card>
  );
};

export default Home;
