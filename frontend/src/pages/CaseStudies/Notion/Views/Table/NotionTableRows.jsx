import React from "react";

const NotionTableRows = ({ datum, index, fields }) => {
  return (
    <div className="flex w-full border-t border-gray-200">
      {fields.map((field, index) => {
        return <div className="grow">{datum[field]}</div>;
      })}
      <div className="grow"></div>
    </div>
  );
};

export default NotionTableRows;
