import React from "react";
import clsx from "clsx";
import useIsMobile from "../../../utils/useIsMobile";

const CTC = () => {
  const isMobile = useIsMobile();
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Code the Change</span>
          {!isMobile && (
            <span className="!justify-self-end">Los Angeles, California</span>
          )}
        </div>
        <span className="text-lg italic">August 2020 - Present</span>
      </div>
      <div
        className={clsx("mt-4", {
          "flex gap-x-2": !isMobile,
          "flex flex-col gap-y-2": isMobile,
        })}
      >
        <div>
          <div>
            &emsp;Code the Change is a student organization within Viterbi
            School of Engineering, aiming to offer pro-bono software solutions
            to Los Angeles-based non-profits. The group operates akin to a
            conventional product development team, involving students in roles
            like product managers, technical leads, designers, and developers.
          </div>
          <div>
            &emsp;Beginning as a freshman, I engaged in roles ranging from
            developer to technical lead and executive board member. During my
            first year, I collaborated with Humans Against Trafficking to create
            predictive models assessing social media account vulnerabilities to
            human trafficking. By analyzing manually labeled Instagram bios, our
            model achieved 54% accuracy across 6 categories.
          </div>
          <div>
            &emsp;In the subsequent year, I contributed to the Ron Finley
            Project by designing a CRM-style solution for handling inquiries and
            managing seasonal volunteers. As a technical lead, I gained valuable
            insights into product-oriented thinking, spending more time on
            communication and task management.
          </div>
          <div>
            &emsp;In my third year, I served as Head of Product, overseeing
            client selection and handover to product teams. I also continued to
            serve as a developer and mentor to other project teams in the
            organization.
          </div>
        </div>
        <img
          className="w-60 aspect-[9/16] m-auto"
          src="CTC.jpg"
          alt="CTC RFP"
        />
      </div>
      <div className="mt-2">
        <span className="font-semibold">Skills used: </span>
        <span>React, TailwindCSS, PostgreSQL, TensorFlow, word2vec</span>
      </div>
    </div>
  );
};

export default CTC;
