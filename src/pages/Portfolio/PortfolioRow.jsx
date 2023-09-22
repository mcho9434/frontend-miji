import React from "react";
import clsx from "clsx";
import useIsMobile from "../../utils/useIsMobile";

const PortfolioRow = ({
  title,
  location,
  date,
  body,
  src,
  alt,
  imageFirst,
}) => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4">{title}</span>
          {!isMobile && <span className="!justify-self-end">{location}</span>}
        </div>
        <span className="text-lg italic">{date}</span>
      </div>
      <div
        className={clsx("mt-4 flex", {
          "gap-x-2": !isMobile,
          "flex-col gap-y-2": isMobile,
        })}
      >
        {imageFirst && (
          <img
            className="w-80 aspect-square object-cover object-center"
            src={src}
            alt={alt}
          />
        )}
        <div className="">&emsp;{body}</div>
        {!imageFirst && (
          <img
            className="w-80 aspect-square object-cover object-center"
            src={src}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioRow;
