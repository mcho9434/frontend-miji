import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="m-4 !w-[800px]">{children}</div>
    </div>
  );
};

export default Card;
