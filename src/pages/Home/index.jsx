import React from "react";
import clsx from "clsx";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Card>
      <div className={clsx("flex m-4 gap-2", { "flex-col": isMobile })}>
        <div className="mt-3">
          <div className="animate-title-slide-down-default flex">
            <div className=" text-4xl">Hi, I'm Matthew!</div>
          </div>
          <div className="mt-4 animate-title-slide-up-default text-lg">
            <div className="">
              &emsp; I'm a product-focused full-stack engineer focused on
              writing clean, simple code. Every part of this website is made
              from using React and TailwindCSS with hosting on Netlify! I use
              this site to showcase my previous work but also fun side projects
              or ideas. Take a look!
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
