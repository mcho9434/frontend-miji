import useIsMobile from "../utils/useIsMobile";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
