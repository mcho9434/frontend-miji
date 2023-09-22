import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const ICON_NAV = [
  {
    icon: <ContactPageIcon className="!w-8 !h-8" />,
    location: "",
    href: "Matthew_Cho_Resume.pdf",
  },
  {
    icon: <EmailIcon className="!w-8 !h-8" />,
    location: "mailto:mjycho@gmail.com",
    href: "",
  },
  {
    icon: <LinkedInIcon className="!w-8 !h-8" />,
    location: "https://www.linkedin.com/in/matthew-cho-usc/",
    href: "",
  },
  {
    icon: <GitHubIcon className="!w-8 !h-8" />,
    location: "https://github.com/mcho9434",
    href: "",
  },
];

export const PAGE_NAV = [
  { title: "Home", to: "/" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Case Studies", to: "/case-studies" },
  { title: "Cool Stuff", to: "/cool-stuff" },
];

export const TITLE_MAP = {};
