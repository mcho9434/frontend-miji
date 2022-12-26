import React from "react";
import Card from "../../../components/Card";
import Divider from "../../../components/Divider";
import useIsMobile from "../../../utils/useIsMobile";
import clsx from "clsx";
const Hobbies = () => {
  const isMobile = useIsMobile();

  return (
    <Card>
      <div>
        <div>
          Here are some hobbies I've done in the past, many of which I'm still
          doing today!
        </div>
        <Divider />
        <div
          className={clsx("grid gap-4", {
            "grid-cols-2": isMobile,
            "grid-cols-3": !isMobile,
          })}
        >
          <div className="aspect-square border border-black text-center rounded-lg p-2">
            Mechanical Keyboards!
          </div>
          <div className="aspect-square border border-black text-center rounded-lg p-2">
            E-Skating/Carving
          </div>
          <div className="aspect-square border border-black text-center rounded-lg p-2">
            Lockpicking
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;
