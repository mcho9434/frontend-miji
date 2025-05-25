import React, { useState } from "react";
import Card from "../../components/Card";
const BOCC = () => {
    const [scores, setScores] = useState({
        vegetable: null,
        moca: null,
        craftStoryRepitition: null,
        functionalActivityScore: null,
    });

    const calculateScore = () => {
        return (
            Number(scores.vegetable) +
            Number(scores.moca) +
            Number(scores.craftStoryRepitition) +
            Number(scores.functionalActivityScore)
        );
    };

    const isValid =
        !!scores.vegetable &&
        !!scores.moca &&
        !!scores.craftStoryRepitition &&
        !!scores.functionalActivityScore;

    return (
        <Card>
            <div className="text-2xl">BOCC</div>
            <div className="mb-4">
                <div>Vegetable naming Score</div>
                <input
                    className="border border-black p-2 mt-1"
                    type="number"
                    value={scores.vegetable}
                    onChange={(e) => {
                        if (e.target.value >= 0) {
                            setScores((prev) => {
                                return { ...prev, vegetable: e.target.value };
                            });
                        }
                    }}
                />
            </div>
            <div className="mb-4">
                <div>MoCA recall</div>
                <input
                    className="border border-black p-2 mt-1"
                    type="number"
                    value={scores.moca}
                    onChange={(e) => {
                        if (e.target.value >= 0 && e.target.value <= 5) {
                            setScores((prev) => {
                                return { ...prev, moca: e.target.value };
                            });
                        }
                    }}
                />
            </div>
            <div className="mb-4">
                <div>Craft story naming score</div>
                <input
                    className="border border-black p-2 mt-1"
                    type="number"
                    value={scores.craftStoryRepitition}
                    onChange={(e) => {
                        if (e.target.value >= 0 && e.target.value <= 25) {
                            setScores((prev) => {
                                return {
                                    ...prev,
                                    craftStoryRepitition: e.target.value,
                                };
                            });
                        }
                    }}
                />
            </div>
            <div className="mb-4">
                <div>Functional activity questionnaire score</div>
                <input
                    className="border border-black p-2 mt-1"
                    type="number"
                    value={scores.functionalActivityScore}
                    onChange={(e) => {
                        if (e.target.value >= 0 && e.target.value <= 30) {
                            setScores((prev) => {
                                return {
                                    ...prev,
                                    functionalActivityScore: e.target.value,
                                };
                            });
                        }
                    }}
                />
            </div>
            <div className="text-xl">
                Score:{" "}
                {isValid
                    ? calculateScore()
                    : "Please fill out all fields to get a score"}
            </div>
        </Card>
    );
};

export default BOCC;
