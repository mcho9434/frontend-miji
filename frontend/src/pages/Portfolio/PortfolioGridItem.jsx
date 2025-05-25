import React from "react";
import clsx from "clsx";
import useIsMobile from "../../utils/useIsMobile";

const PortfolioGridItem = ({ title, location, date, body, src, alt }) => {
    const isMobile = useIsMobile();

    return (
        <div className="flex flex-col transition ease-in-out">
            <img
                className="w-full aspect-square object-cover object-center rounded-lg"
                src={src}
                alt={alt}
            />
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">{title}</div>
                        <div className="text-sm italic">{date}</div>
                    </div>
                    <p className="text-sm mt-2">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGridItem;
