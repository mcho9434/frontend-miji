import Waiting from "./ESSAY_COMPONENTS/Waiting.jsx";
import SellingStuff from "./ESSAY_COMPONENTS/SellingStuff.jsx";
import Focus from "./ESSAY_COMPONENTS/Focus.jsx";

const ESSAYS_DATA = [
    {
        id: 1,
        title: "Waiting (10.26.24)",
        slug: "waiting",
        content: <Waiting />,
    },
    {
        id: 2,
        title: "Selling Stuff (5.28.25)",
        slug: "selling-stuff",
        content: <SellingStuff />,
    },
    { id: 3, title: "Focus (6.8.25)", slug: "focus", content: <Focus /> },
];

export default ESSAYS_DATA;
