import Waiting from "./ESSAY_COMPONENTS/Waiting.jsx";
import SellingStuff from "./ESSAY_COMPONENTS/SellingStuff.jsx";
import Focus from "./ESSAY_COMPONENTS/Focus.jsx";

const ESSAYS_DATA = [
    {
        id: 1,
        title: "Waiting (10.26.24)",
        slug: "waiting",
        content: <Waiting />,
        url: "https://www.notion.so/Waiting-26448ebd627580d39ff0f61170f8aa54?source=copy_link",
    },
    {
        id: 2,
        title: "Selling Stuff (5.28.25)",
        slug: "selling-stuff",
        content: <SellingStuff />,
        url: "https://www.notion.so/Selling-Stuff-26448ebd6275805fa574def855eedc5c?source=copy_link",
    },
    {
        id: 3,
        title: "Focus (6.8.25)",
        slug: "focus",
        content: <Focus />,
        url: "https://www.notion.so/Focus-26448ebd6275802cba11d0fdd0a12515?source=copy_link",
    },
];

export default ESSAYS_DATA;
