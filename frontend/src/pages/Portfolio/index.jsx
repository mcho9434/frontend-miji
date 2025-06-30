import React from "react";
import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";

import PORTFOLIO_DATA from "../../constants/PORTFOLIO_DATA";
import PortfolioGridItem from "./PortfolioGridItem";

const Portfolio = () => {
    const isMobile = useIsMobile();

    return (
        <Card>
            <div
                className="grid gap-6"
                style={{
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                }}
            >
                {PORTFOLIO_DATA.map((item, idx) => (
                    <PortfolioGridItem
                        key={item.title}
                        title={item.title}
                        location={item.location}
                        date={item.date}
                        body={item.body}
                        src={item.src}
                        alt={item.alt}
                    />
                ))}
            </div>
        </Card>
    );
};

export default Portfolio;
