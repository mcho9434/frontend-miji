import React from "react";

import { ICON_NAV, PAGE_NAV } from "../../constants/NAVBAR_LINKS";
import { Outlet, Link } from "react-router-dom";
import clsx from "clsx";

const DesktopNavbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="flex w-full justify-around items-center py-2 border-b border-black animate-title-slide-right-default">
            <div className="flex ml-4 gap-4">
              {ICON_NAV.map((navItem) => {
                if (navItem?.location !== "") {
                  return (
                    <div
                      className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                      onClick={() => (window.location = navItem.location)}
                      key={navItem.location}
                    >
                      {navItem.icon}
                    </div>
                  );
                }
                return (
                  <a
                    className="p-3 transition ease-in-out hover:-translate-y-1 shadow-md border border-black rounded-lg cursor-pointer"
                    href={navItem.href}
                    target="_blank"
                    rel="noreferrer"
                    key={navItem.href}
                  >
                    {navItem.icon}
                  </a>
                );
              })}
            </div>
            <div className="text-4xl">
              <Link to="/">Matthew Cho</Link>
            </div>
            <div className="flex mr-4 gap-4">
              {PAGE_NAV.map((navItem) => {
                return (
                  <Link
                    key={navItem.to}
                    to={navItem.to}
                    className={clsx(
                      "transition ease-in-out hover:-translate-y-1 shadow-md p-3 border border-black rounded-lg flex justify-center items-center"
                    )}
                  >
                    {navItem.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default DesktopNavbar;
