import React from "react";
import AddIcon from "@mui/icons-material/Add";

const NotionTableAddRow = ({ addRow }) => {
  return (
    <div
      className="w-full pt-[5px] pb-1.5 border-b border-gray-200 flex items-center hover:bg-gray-200 pl-2"
      onClick={() => {
        addRow();
      }}
    >
      <div className="opacity-[0.5]">
        <AddIcon style={{ color: "#37352f" }} />
      </div>
      <div className="relative text-[#37352f] opacity-[0.5] text-[14px] top-[1px]">
        New
      </div>
    </div>
  );
};

export default NotionTableAddRow;
