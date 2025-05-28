import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ICON_NAV = [
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
        location: "https://github.com/mjycho",
        href: "",
    },
];

export const PAGE_NAV = [
    { title: "Home", to: "/" },
    { title: "Stuff I've Done", to: "/portfolio" },
    { title: "Case Studies", to: "/case-studies" },
    { title: "Cool Stuff", to: "/cool-stuff" },
    { title: "Essays", to: "/essays" },
];

export const TITLE_MAP = {};
