import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useIsMobile from "../utils/useIsMobile";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();
  console.log(location);

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <nav>
          <div className="flex w-full justify-between items-center py-3 border-b border-black">
            <div className="ml-4 text-2xl">Matthew Cho</div>
            <div
              className="mr-4 p-1"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <MenuIcon />
            </div>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => {
                setDrawerOpen(false);
              }}
            >
              <div
                className="flex flex-col m-4 justify-between h-full"
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                <div className="flex flex-col gap-4">
                  <div>Menu</div>
                  <Link
                    to="/"
                    className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
                  >
                    Home
                  </Link>
                  <Link
                    to="/portfolio"
                    className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/catan-buddy"
                    className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
                  >
                    Catan Buddy
                  </Link>
                  <Link
                    to="/hobbies"
                    className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
                  >
                    Hobbies
                  </Link>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div
                      className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                      onClick={() =>
                        (window.location = "mailto:mjycho@gmail.com")
                      }
                    >
                      <EmailIcon className="!w-8 !h-8 " />
                    </div>
                    <div
                      className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                      onClick={() =>
                        (window.location =
                          "https://www.linkedin.com/in/matthew-cho-usc/")
                      }
                    >
                      <LinkedInIcon className="!w-8 !h-8" />
                    </div>
                    <div
                      className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                      onClick={() =>
                        (window.location =
                          "https://www.linkedin.com/in/matthew-cho-usc/")
                      }
                    >
                      <GitHubIcon className="!w-8 !h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <div>
        <nav>
          <div className="flex w-full justify-between items-center py-2 border-b border-black">
            <div className="flex ml-4 gap-4">
              <div
                className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() => (window.location = "mailto:mjycho@gmail.com")}
              >
                <EmailIcon className="!w-8 !h-8 " />
              </div>
              <div
                className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/matthew-cho-usc/")
                }
              >
                <LinkedInIcon className="!w-8 !h-8" />
              </div>
              <div
                className="p-3 hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/matthew-cho-usc/")
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
                className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
              >
                Portfolio
              </Link>
              <Link
                to="/catan-buddy"
                className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
              >
                Catan Buddy
              </Link>
              <Link
                to="/hobbies"
                className="hover:bg-slate-200 shadow-md p-3 border border-black rounded-lg"
              >
                Hobbies
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;