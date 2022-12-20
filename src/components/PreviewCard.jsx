import React from "react";

const PreviewCard = ({ children }) => {
  return (
    <div className="w-full aspect-[2/3] border border-black rounded-lg">
      {children}
    </div>
  );
};

export default PreviewCard;
