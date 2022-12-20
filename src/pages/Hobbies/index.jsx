import React from "react";
import Card from "../../components/Card";
import Divider from "../../components/Divider";

const Hobbies = () => {
  return (
    <Card>
      <div>
        <div>
          Here are some hobbies I've done in the past, many of which I'm still
          doing today!
        </div>
        <Divider />
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-square border border-black text-center">
            Mechanical Keyboards!
          </div>
          <div className="aspect-square border border-black text-center">
            E-Skating/Carving
          </div>
          <div className="aspect-square border border-black text-center">
            Lockpicking
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;
