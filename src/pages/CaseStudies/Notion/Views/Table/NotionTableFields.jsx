import React from "react";

const NotionTableFields = ({ fields, setFields, addField, deleteField }) => {
  return (
    <div className="w-full">
      {fields.map((field) => {
        return (
          <span className="text-[#37352f] opacity-[0.45] w-full">{field}</span>
        );
      })}
      <span
        className="w-full"
        onClick={() => {
          addField("wow", "apple");
        }}
      >
        Add new Field
      </span>
    </div>
  );
};

export default NotionTableFields;

/*
<button
        className="mr-4"
        onClick={() => {
          addField("wow", "apple");
        }}
      >
        add new field
      </button>
      <button
        onClick={() => {
          deleteField("wow");
        }}
      >
        delete field
      </button> 
*/
