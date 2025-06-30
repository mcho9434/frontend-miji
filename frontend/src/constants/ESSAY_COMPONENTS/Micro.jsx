import React from "react";
import Divider from "../../components/Divider";

const Micro = () => {
    return (
        <div className="waiting-essay">
            <div className="text-2xl font-bold">Micro Founders</div>
            <div>June 26th, 2025</div>
            <div className="text-lg">
                <i>
                    &emsp; This is a braindump after some thinking I've had over
                    the past week. Excuse how much stuff there is.
                </i>
            </div>
            <Divider />
            <div className="text-lg">
                &emsp; I was thinking about PG's How People Get Rich Now essay.
                The TLDR:
            </div>
            <div className="ml-16">
                &emsp; By 2020 the biggest source of new wealth was what are
                sometimes called "tech" companies. Of the 73 new fortunes, about
                30 derive from such companies. These are particularly common
                among the richest of the rich: 8 of the top 10 fortunes in 2020
                were new fortunes of this type.
            </div>
            <div className="text-lg">
                &emsp; These people are in the low hundreds of billions
                bracket(Zuckerberg: 244B, Gates: 116B, Bezos: 226B). They've
                captured so much wealth they have true agency over basically
                anything. However, there's a quieter bracket in my mind of
                people who are comfortable to do anything, but only in the scope
                of their lives. They travel where they want, buy what they want,
                do what they want to an extent.{" "}
                <b>
                    For the sake of argument let's say that's set at +3M/year or
                    ~250K/month.{" "}
                </b>
            </div>
            <Divider />
            <div className="text-lg">
                &emsp; And to me, that'd be more than sufficient. So, how can we
                get there? There's the currently-planned and common in SF, found
                a venture backed company, grow and likely sell. Plently of
                founders exit for tens of millions are live happily ever
                after(except the Loom guy 🤔). This is usually a several year
                expedition after which you <b>might</b> exit. At my current age
                and experience, I estimate I'll get ~5 legit founding attempts
                of quality.
            </div>
            <div className="text-lg">
                &emsp; So(read shots on goal from last week), what if we got
                more shots? Rather than try and capture markets and 0 to 1 a
                company let's flip the thinking. We can build faster and faster
                everyday, we can parallelize the writing itself, and we can
                dispatch agents to write on our behalf. I'm thinking about all
                the ideas people discard for being easy but having too little
                market and not being capital efficient? Let's try and capture
                those. This would mean faster time-to-market, less personnel
                overhead, etc. Another way to think about it, 250K/month is
                really 5 things making 50K/month. And I'm kinda thinking that 5
                shots at becoming basically a god might be harder than ~100
                shots at making something that nets 50K a month.
            </div>
        </div>
    );
};

export default Micro;
