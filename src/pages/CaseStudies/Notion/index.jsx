import React from "react";
import NotionTable from "./Views/Table";
import Card from "../../../components/Card";
import Divider from "../../../components/Divider";

const Notion = () => {
  return (
    <Card>
      <div className="text-2xl">Notion Views</div>
      <Divider />
      <div>
        <div>"Static" Table View (desktop only, can add columns and rows)</div>
        <div className="w-1/2 mb-4">
          <Divider />
        </div>
        <NotionTable />
      </div>
    </Card>
  );
};

export default Notion;
