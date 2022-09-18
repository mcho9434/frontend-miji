import React from "react";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="border-b-8">
      <div className="mx-8">
        <Link
          className="font-poppins font-bold	mr-8 cursor-pointer"
          activeClass="active"
          smooth
          spy
          to="about"
        >
          ABOUT
        </Link>

        <Link
          className="font-poppins font-bold mr-8 cursor-pointer"
          activeClass="active"
          smooth
          spy
          to="projects"
        >
          PROJECTS
        </Link>

        <Link
          className="font-poppins font-bold mr-8 cursor-pointer"
          activeClass="active"
          smooth
          spy
          to="blog"
        >
          BLOG
        </Link>

        <Link
          className="font-poppins font-bold mr-8 cursor-pointer"
          activeClass="active"
          smooth
          spy
          to="contact"
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
