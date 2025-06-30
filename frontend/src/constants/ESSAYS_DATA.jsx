import Waiting from "./ESSAY_COMPONENTS/Waiting.jsx";
import SellingStuff from "./ESSAY_COMPONENTS/SellingStuff.jsx";
import Focus from "./ESSAY_COMPONENTS/Focus.jsx";
import ShotsOnGoal from "./ESSAY_COMPONENTS/ShotsOnGoal.jsx";
import Micro from "./ESSAY_COMPONENTS/Micro.jsx";

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
    // { id: 4, title: "Shots on Goal (6.12.25)", slug: "shots-on-goal", content: <ShotsOnGoal /> },
    // {id: 5, title: "Micro Founders (6.26.25)", slug: "micro-founders", content: <Micro />}
];

export default ESSAYS_DATA;
