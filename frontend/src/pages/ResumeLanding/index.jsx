import React from "react";
import clsx from "clsx";

import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";

const ResumeLanding = () => {
  const isMobile = useIsMobile();

  return (
    <Card>
      <div className={clsx("flex m-4 gap-2", { "flex-col": isMobile })}>
        <div className="mt-3">
          <div className="mt-2 text-3xl font-semibold">
            &emsp;If you're on this page(rather than{" "}
            <a href="/" className="underline">
              this one
            </a>
            ), it means you came from my resume or a private link.
          </div>
          <div className="mt-2 text-xl">
            &emsp;
            <a
              href="https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/"
              className="underline"
            >
              Studies
            </a>{" "}
            have found that the average user spends less than a minute before
            leaving a website. You can read all about the work I've done on my
            resume and in the portfolio section of this website, but{" "}
            <span className="font-bold">
              please spend your valuable seconds reading about my skills that
              won’t show up on my resume.
            </span>
          </div>
          <div className="mt-2 text-xl">
            &emsp;Behind the scenes, I've already devoted thousands of dev hours
            working with product managers, tech leads, and designers. It’s
            helped to hone my development skills, and I’m definitely proud of
            that. But more importantly I gained a ​​commitment to effective
            communication and learned to take ownership for my work. Beyond
            coding knowledge, this combination has allowed me to consistently
            ship quality products, improve my past work when applicable, and be an
            trusted, effective member of my team.
          </div>
          <div className="mt-2 text-xl">
            &emsp;I know this is just my perspective, so I've even collected{" "}
            <a className="underline" href="recs.png" target="_blank">
              testimonials
            </a>{" "}
            on{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/matthew-cho-usc/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>{" "}
            from my previous PM's/TL's who have also observed these qualities in
            me. Thanks for reading! This took a while to build, but should only
            take you ~30 seconds to read :)
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResumeLanding;
