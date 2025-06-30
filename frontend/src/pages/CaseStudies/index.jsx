import React from "react";
import StudiesNavbar from "./StudiesNavbar";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
const CaseStudies = () => {
    return (
        <Card>
            <div>
                Case Studies! Just things I've tinkered with, nothing too
                serious.
            </div>
            <Divider />
            <StudiesNavbar />
        </Card>
    );
};

export default CaseStudies;
