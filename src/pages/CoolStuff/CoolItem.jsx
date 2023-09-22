import React from "react";

const CoolItem = ({ itemProps }) => {
  return (
    <div className="transition ease-in-out hover:-translate-y-1">
      <a href={itemProps.link}>
        <div>
          <img
            className="aspect-square h-ful w-full object-cover object-center"
            src={itemProps.image}
            alt={itemProps.alt}
          />
        </div>
        <div className="p-2">
          <div className="text-lg">{itemProps.name}</div>
          <div>{itemProps.description}</div>
        </div>
      </a>
    </div>
  );
};

export default CoolItem;
