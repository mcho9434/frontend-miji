import React, { useEffect } from "react";
import poem from "../../../constants/AUGURIES_OF_INNOCENCE";

const Panel = ({
    offset,
    scrollYPosition,
    setScrollYPosition,
    currentPanelOffset,
    setCurrentPanelOffset,
}) => {
    const scrollEvent = (e) => {
        const target = e.target;
        setScrollYPosition(target.scrollTop - offset * 256);
        setCurrentPanelOffset(offset);
    };

    useEffect(() => {
        if (currentPanelOffset !== offset) {
            const scrollPanelElement = document.querySelector(
                "#panel" + offset
            );
            scrollPanelElement.scrollTo(0, scrollYPosition + offset * 256);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollYPosition, offset]);

    return (
        <div className="mt-4">
            Panel {offset}
            <div
                className="border border-black p-2 rounded-md h-64 overflow-y-scroll w-full whitespace-pre-wrap"
                onScroll={scrollEvent}
                id={"panel" + offset}
            >
                {poem}
            </div>
        </div>
    );
};

export default Panel;
