import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import clsx from "clsx";

import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import { ICON_NAV, PAGE_NAV } from "../../constants/NAVBAR_LINKS";

const MobileNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="flex w-full justify-between items-center py-3 border-b border-black animate-title-slide-right-default">
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
                <div className="text-3xl">Menu</div>
                {PAGE_NAV.map((navItem) => {
                  return (
                    <Link
                      key={navItem.to}
                      to={navItem.to}
                      className={clsx(
                        "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg text-center"
                      )}
                    >
                      {navItem.title}
                    </Link>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {ICON_NAV.map((navItem) => {
                  if (navItem?.location !== "") {
                    return (
                      <div
                        className="flex justify-center p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                        onClick={() => (window.location = navItem.location)}
                        key={navItem.location}
                      >
                        {navItem.icon}
                      </div>
                    );
                  }
                  return (
                    <div className="flex justify-center p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer">
                      <a
                        className=""
                        href={navItem.href}
                        target="_blank"
                        rel="noreferrer"
                        key={navItem.href}
                      >
                        {navItem.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MobileNavbar;
