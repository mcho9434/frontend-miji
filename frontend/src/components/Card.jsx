import clsx from "clsx";
import React from "react";
import useIsMobile from "../utils/useIsMobile";

const Card = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className={clsx("w-full flex justify-center")}>
      <div
        className={clsx("m-4", {
          "!w-[1000px]": !isMobile,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
