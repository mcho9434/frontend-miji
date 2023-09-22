import React from "react";
import { useLocation } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Outlet, Link } from "react-router-dom";
import clsx from "clsx";

const DesktopNavbar = () => {
  const location = useLocation().pathname;

  return (
    <>
      <div>
        <nav>
          <div className="flex w-full justify-around items-center py-2 border-b border-black animate-title-slide-right-default">
            <div className="flex ml-4 gap-4">
              <a
                className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                href="Matthew_Cho_Resume.pdf"
                target="_blank"
              >
                <ContactPageIcon className="!w-8 !h-8 " />
              </a>
              <div
                className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() => (window.location = "mailto:mjycho@gmail.com")}
              >
                <EmailIcon className="!w-8 !h-8 " />
              </div>
              <div
                className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/matthew-cho-usc/")
                }
              >
                <LinkedInIcon className="!w-8 !h-8" />
              </div>
              <div
                className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() =>
                  (window.location = "https://github.com/mcho9434")
                }
              >
                <GitHubIcon className="!w-8 !h-8" />
              </div>
            </div>
            <div className="text-xl">
              <Link to="/">Matthew Cho</Link>
            </div>
            <div className="flex mr-4 gap-4">
              <Link
                to="/"
                className={clsx(
                  "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg",
                  {
                    "underline underline-offset-2 font-semibold ":
                      location === "/",
                  }
                )}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={clsx(
                  "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg",
                  {
                    "underline underline-offset-2 font-semibold ":
                      location.includes("/portfolio"),
                  }
                )}
              >
                Portfolio
              </Link>

              <Link
                to="/case-studies"
                className={clsx(
                  "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg",
                  {
                    "underline underline-offset-2 font-semibold ":
                      location.includes("/case-studies"),
                  }
                )}
              >
                Case Studies
              </Link>
              <Link
                to="/cool-stuff"
                className={clsx(
                  "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg",
                  {
                    "underline underline-offset-2 font-semibold ":
                      location.includes("cool-stuff"),
                  }
                )}
              >
                Cool Stuff
              </Link>
              {/* <Link
              to="/hobbies"
              className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
            >
              Hobbies
            </Link> */}
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default DesktopNavbar;
