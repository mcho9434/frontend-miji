import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NotionTableAddField = ({ length, addField }) => {
  const empty = Array.apply(null, Array(length)).map((x, i) => {
    return i;
  });
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full h-[36px] items-center">
        <div
          className="px-3 py-1.5 text-[#37352f] opacity-[0.65] hover:bg-gray-200 h-[36px]"
          onClick={() => {
            addField("apple", "twnety");
          }}
        >
          +
        </div>
        <div className="flex items-center text-[#37352f] opacity-[0.45] grow hover:bg-gray-200 h-[36px] pl-1">
          <MoreHorizIcon />
        </div>
      </div>

      {empty.map((emptyItem, index) => {
        return (
          <div
            key={index}
            className="border-t border-gray-200 text-[14px] px-2 pt-[5px] pb-1.5 font-medium pointer-events-none h-[36px]"
          >
            <div className="invisible"> {emptyItem}</div>
          </div>
        );
      })}
      <div className="h-px bg-gray-200" />
    </div>
  );
};

export default NotionTableAddField;
