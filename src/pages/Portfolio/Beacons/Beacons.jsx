import React from "react";
import useIsMobile from "../../../utils/useIsMobile";

const Beacons = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Beacons</span>
          {!isMobile && (
            <span className="!justify-self-end">San Francisco, California</span>
          )}
        </div>
        <span className="text-lg italic">August 2022 - December 2022</span>
      </div>
      <div className="mt-4">
        <div>
          &emsp;I worked at{" "}
          <a className="underline font-semibold" href="https://beacons.ai/">
            Beacons
          </a>{" "}
          as a software engineering intern in the fall semester of my junior
          year. Beacons is an early-stage startup focused on making an
          all-in-one toolkit for creators. I was a part of the growth team,
          focused on the core link-in-bio product(
          <a
            className="underline font-semibold"
            href="https://beacons.ai/mjycho"
          >
            Here's
          </a>{" "}
          mine).
        </div>
        <div>
          &emsp;I was a full time engineer on the team, trusted to deliver
          impactful features and solve key bugs on a timely basis. I
          particularly appreciated how my managers gave me the autonomy to truly
          have the responsibilites of a full-time engineer rather than an
          intern. For example, I'd maintain a similar contribution rate to other
          full-time engineers and participate in a variety of team meetings,
          from standups to sprint retros. Especially since it was an internship
          in place of university, I felt a greater pace of learning both in
          techincal skill but also in learning to communicate effectively with
          product managers and designers. It was also really insightful to be
          able to work directly with founders on their product due to the nature
          of a small company.
        </div>
        <div className="mt-2">
          <span className="font-semibold">Skills used: </span>
          <span>
            React, Typescript, TailwindCSS, PostgreSQL, Firebase, Docker,
            Jest+RTL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Beacons;
