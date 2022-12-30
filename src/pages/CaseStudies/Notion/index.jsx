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
        <div>Table View (desktop only)</div>
        <div className="w-1/2 mb-4">
          <Divider />
        </div>
        <NotionTable />
      </div>
    </Card>
  );
};

export default Notion;
