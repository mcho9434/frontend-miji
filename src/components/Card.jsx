import clsx from "clsx";
import React from "react";
import useIsMobile from "../utils/useIsMobile";

const Card = ({ children }) => {
  const isMobile = useIsMobile();
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  return (
    <div className={clsx("w-full flex justify-center")}>
      <div
        className={clsx("m-4", {
          "!w-[800px]": !isMobile,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
