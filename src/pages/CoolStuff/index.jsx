import React from "react";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";
import Divider from "../../components/Divider";
import COOL_ITEMS from "./COOL_ITEMS.js";
import CoolItem from "./CoolItem";
import clsx from "clsx";
const CoolStuff = () => {
  console.log(COOL_ITEMS[0]);
  const isMobile = useIsMobile();

  return (
    <Card>
      <div>
        A place for me to keep track of cool stuff I've stumbled upon! Some are
        too expensive to experience yet :(
      </div>
      <Divider />
      <div
        className={clsx("grid grid-cols-4 gap-4", { "grid-cols-1": isMobile })}
      >
        {COOL_ITEMS.map((item) => {
          return <CoolItem key={item.name} itemProps={item} />;
        })}
      </div>
    </Card>
  );
};

export default CoolStuff;
