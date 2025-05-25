import React from "react";
import { Link } from "react-router-dom";

const StudiesNavbar = () => {
  return (
    <div className="flex gap-2 mt-4">
      <Link to="/case-studies/notion">
        <div className="transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg">
          Notion Collections/Database
        </div>
      </Link>
      <Link to="/catan-buddy">
        <div className="transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg">
          Catan Buddy
        </div>
      </Link>
      <Link to="/case-studies/three-fold-viewport">
        <div className="transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg">
          3-fold viewport
        </div>
      </Link>
      <Link to="/case-studies/BOCC">
        <div className="transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg">
          BOCC
        </div>
      </Link>
    </div>
  );
};

export default StudiesNavbar;
