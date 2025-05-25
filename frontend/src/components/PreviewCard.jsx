import React from "react";

const PreviewCard = ({ children }) => {
  return (
    <div className="w-full border border-black rounded-lg cursor-pointer">
      {children}
    </div>
  );
};

export default PreviewCard;
