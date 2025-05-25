import React,{useState} from "react";
import Card from "../../../components/Card";
import Divider from "../../../components/Divider";
import Panel from "./Panel";

const Viewport = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const [currentPanelOffset, setCurrentPanelOffset] = useState(0);
    return (
        <Card>
            <div className="text-2xl">3 Fold Viewport</div>
            <Divider />
            <div>
                Just thought of a view where we could utilize more horizontal
                space while viewing vertical content. Think of a book but three
                pages wide with smooth scrolling. Current scroll position:{" "}
                {scrollYPosition}
            </div>
            <div className="flex gap-2 w-full">
                <Panel
                    offset={0}
                    scrollYPosition={scrollYPosition}
                    setScrollYPosition={setScrollYPosition}
                    currentPanelOffset={currentPanelOffset}
                    setCurrentPanelOffset={setCurrentPanelOffset}
                />
                <Panel
                    offset={1}
                    scrollYPosition={scrollYPosition}
                    setScrollYPosition={setScrollYPosition}
                    currentPanelOffset={currentPanelOffset}
                    setCurrentPanelOffset={setCurrentPanelOffset}
                />
                <Panel
                    offset={2}
                    scrollYPosition={scrollYPosition}
                    setScrollYPosition={setScrollYPosition}
                    currentPanelOffset={currentPanelOffset}
                    setCurrentPanelOffset={setCurrentPanelOffset}
                />
            </div>
        </Card>
    );
};

export default Viewport;
