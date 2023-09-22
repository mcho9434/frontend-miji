import React from "react";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";
import Divider from "../../components/Divider";
import COOL_ITEMS from "../../constants/COOL_ITEMS";
import CoolItem from "./CoolItem";
import clsx from "clsx";
const CoolStuff = () => {
  const isMobile = useIsMobile();

  return (
    <Card>
      <div>
        Things I'm a fan of! Some of these are more wishlist items than things I
        use :(
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
