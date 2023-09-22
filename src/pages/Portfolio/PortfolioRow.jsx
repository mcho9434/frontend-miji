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
    <div
      className={clsx({
        "animate-title-slide-left-default": imageFirst && !isMobile,
        "animate-title-slide-right-default": !imageFirst && !isMobile,
      })}
    >
      <div className="flex w-full justify-between">
        <div>
          <span className="text-3xl font-semibold mr-4">{title}</span>
          {!isMobile && (
            <span className="!justify-self-end text-3xl">{location}</span>
          )}
        </div>
        <span className="italic text-3xl">{date}</span>
      </div>
      <div
        className={clsx("mt-4 flex", {
          "gap-x-4": !isMobile,
          "flex-col gap-y-4": isMobile,
        })}
      >
        {imageFirst && (
          <img
            className="w-80 aspect-square object-cover object-center rounded-lg"
            src={src}
            alt={alt}
          />
        )}
        <div className="text-xl">&emsp;{body}</div>
        {!imageFirst && (
          <img
            className="w-80 aspect-square object-cover object-center rounded-lg"
            src={src}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioRow;
