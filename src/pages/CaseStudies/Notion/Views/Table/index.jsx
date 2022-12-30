import React, { useState } from "react";
import NotionTableHeader from "./NotionTableHeader";
import NotionTableColumn from "./NotionTableColumn";
import NotionTableAddField from "./NotionTableAddField";
import NotionTableAddRow from "./NotionTableAddRow";
import Divider from "../../../../../components/Divider";
// hover color 37352f
// element color

const NotionTable = () => {
  const [isHovering, setIsHovering] = useState(false);

  const [title, setTitle] = useState("Untitled");
  const [data, setData] = useState([
    { row: 0, Name: "matthew", Age: 2 },
    { row: 1, Name: "sam", Age: 3 },
    { row: 2, Name: "jo", Age: 6 },
    { row: 3, Name: "bob", Age: 52 },
  ]);
  const [fields, setFields] = useState([
    { index: 0, title: "Name", defaultValue: "" },
    { index: 1, title: "Age", defaultValue: 0 },
  ]);

  const addField = (attributeName, defaultValue) => {
    const newData = data.map((oldRow) => {
      oldRow[attributeName] = defaultValue;
      return oldRow;
    });
    setData(newData);

    const newField = {
      title: attributeName,
      defaultValue: defaultValue,
      index: fields?.length,
    };
    setFields((oldFields) => {
      return oldFields.concat(newField);
    });
  };

  const deleteField = (attributeName) => {
    const newData = data.map((oldRow) => {
      delete oldRow[attributeName];
      return oldRow;
    });
    setData(newData);
  };

  const addRow = () => {
    const newRowNumber = data[data.length - 1].row + 1;
    let newRow = { row: newRowNumber };
    for (let i = 0; i < fields.length; i++) {
      newRow[fields[i].title] = fields[i].defaultValue;
    }
    setData((oldData) => {
      return oldData.concat(newRow);
    });
  };

  const mouseEnterHandler = () => {
    setIsHovering(true);
  };
  const mouseLeaveHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="font-notion"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <NotionTableHeader
        title={title}
        setTitle={setTitle}
        isHovering={isHovering}
      />
      <div className="flex w-full">
        {fields.map((field, index) => {
          return (
            <NotionTableColumn
              field={field}
              data={data.reduce((accumulator, currentValue) => {
                return accumulator.concat(currentValue[field.title]);
              }, [])}
            />
          );
        })}
        <NotionTableAddField length={data.length} addField={addField} />
      </div>
      <NotionTableAddRow addRow={addRow} />

      {/* <NotionTableFields
        fields={fields}
        setFields={setFields}
        addField={addField}
        deleteField={deleteField}
      />
      {data.map((row, index) => {
        return (
          <NotionTableRows
            key={index}
            datum={row}
            fields={fields}
            isFirst={row.row === 0}
          />
        );
      })} */}
    </div>
  );
};

export default NotionTable;
