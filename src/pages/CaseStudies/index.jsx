import React from "react";
import StudiesNavbar from "./StudiesNavbar";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
const CaseStudies = () => {
  return (
    <Card>
      <div>
        Case Studies! Just a fun little side project, but I've tried to, from
        scratch, recreate signature components of popular products.
      </div>
      <Divider />
      <StudiesNavbar />
    </Card>
  );
};

export default CaseStudies;
