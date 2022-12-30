import React from "react";
import { Link } from "react-router-dom";

const StudiesNavbar = () => {
  return (
    <div className="flex gap-2 mt-4">
      <div>
        <Link
          to="/case-studies/notion"
          className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
        >
          Notion
        </Link>
      </div>
    </div>
  );
};

export default StudiesNavbar;
