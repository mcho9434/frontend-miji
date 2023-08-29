import React from "react";
import { Link } from "react-router-dom";

const StudiesNavbar = () => {
  return (
    <div className="flex gap-2 mt-4">
      <Link to="/case-studies/notion">
        <div className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg">
          Notion
        </div>
      </Link>
      <Link to="/catan-buddy">
        <div className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg">
          Catan Buddy
        </div>
      </Link>
    </div>
  );
};

export default StudiesNavbar;
