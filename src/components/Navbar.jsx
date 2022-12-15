import { Outlet, Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav>
        <div className="flex w-full justify-between items-center py-2 border-b border-black">
          <div className="flex ml-4 gap-4">
            <div
              className="p-3 hover:bg-gray-500 border border-black rounded-lg cursor-pointer"
              onClick={() => (window.location = "mailto:mjycho@gmail.com")}
            >
              <EmailIcon className="!w-8 !h-8 " />
            </div>
            <div
              className="p-3 hover:bg-gray-500  border border-black rounded-lg cursor-pointer"
              onClick={() =>
                (window.location =
                  "https://www.linkedin.com/in/matthew-cho-usc/")
              }
            >
              <LinkedInIcon className="!w-8 !h-8" />
            </div>
            <div
              className="p-3 hover:bg-gray-500  border border-black rounded-lg cursor-pointer"
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
              className="hover:bg-gray-500 p-3 border border-black rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="hover:bg-gray-500 p-3 border border-black rounded-lg"
            >
              Portfolio
            </Link>
            <Link
              to="/catan-buddy"
              className="hover:bg-gray-500 p-3 border border-black rounded-lg"
            >
              Catan Buddy
            </Link>
            <Link
              to="/hobbies"
              className="hover:bg-gray-500 p-3 border border-black rounded-lg"
            >
              Hobbies
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
