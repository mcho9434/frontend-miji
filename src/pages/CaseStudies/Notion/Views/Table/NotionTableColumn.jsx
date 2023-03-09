import React from "react";

const NotionTableColumn = ({ field, data }) => {
  console.log(data);
  return (
    <div className="w-full flex flex-col">
      <div className="px-2 py-1.5 text-[#37352f] opacity-[0.65] hover:bg-gray-200">
        {field.title}
      </div>
      {data.map((datum, index) => {
        if(typeof datum == "boolean"){
          return (
            <div
              key={index}
              className="border-r border-t border-gray-200 text-[14px] px-2 pt-[5px] pb-1.5 font-medium h-[36px] flex items-center"
            >
              <input type="checkbox" checked={datum}/>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="border-r border-t border-gray-200 text-[14px] px-2 pt-[5px] pb-1.5 font-medium h-[36px]"
          >
            {datum}
          </div>
        );
      })}
      <div className="h-px bg-gray-200" />
    </div>
  );
};

export default NotionTableColumn;
