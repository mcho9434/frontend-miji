/* eslint-disable */
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NotionTableHeader = ({ title, setTitle, isHovering }) => {
  console.log(title);
  return (
    <div className="flex items-center mx-1">
      {/* <input
        className="outline-0 text-[22px] font-bold"
        spellCheck="false"
        type="text"
        value={title}
        onChange={(e) => {
          if (e.target.value !== "") {
            setTitle(e.target.value);
          }
        }}
      /> */}
      <div
        className="outline-0 text-[22px] font-bold"
        onBlur={(e) => {
          console.log(e.target.innerText);
        }}
        contentEditable
      >
        {title}
      </div>
      <div className="flex items-center ml-1 w-6 h-6 hover:bg-[#37352f] hover:bg-opacity-[0.2] rounded-[3px] opacity-[0.45]">
        <MoreHorizIcon style={{ color: "#37352f" }} />
      </div>
    </div>
  );
};

export default NotionTableHeader;
