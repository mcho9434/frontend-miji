import React from "react";
import Card from "../../components/Card";
const NoPage = () => {
  return (
    <Card>
      This address does not have a page. Please use the navigation bar or click{" "}
      <a href="/" className="underline">
        Here
      </a>{" "}
      to go to the hompage
    </Card>
  );
};

export default NoPage;
