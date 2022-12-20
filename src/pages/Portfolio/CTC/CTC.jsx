import React from "react";
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
      <div className="mt-4">
        <div>
          &emsp;Code the Change is a student organization in the Viterbi School
          of Engineering. It's goal is to provide pro-bono software solutions to
          non-profits in the Los Angeles area. The organization functions like a
          conventional product developemnt team, with students acting as product
          managers, technical leads, designers and developers.I joined the
          organization as a freshman and have since participated as a developer,
          technical lead, and an executive board member.
        </div>
        <img
          className="w-60 aspect-[9/16] m-auto"
          src="CTC.jpg"
          alt="CTC RFP"
        />
        <div>
          &emsp;In my first year, I worked with Humans Against Trafficking to
          write predictive models for the vulnerabilities of social media
          accounts to human trafficking. Analyzing instagram bio's that were
          manually labeled, we were able to write a model that achieved a 54%
          accuracy when predicting between 6 categories.
        </div>
        <div>
          &emsp;In my second year, I worked with the Ron Finley Project to write
          a CRM-esque product to process inquiries of the organization and an
          additional product to manage the thousands of yearly seasonal
          volunteers. It was my first experience acting as a technical lead, and
          gave me a lot of insight about more product oriented thinking. I spent
          much more time talking with other engineers or writing tasks than I
          did actually writing code.
        </div>
        <div>
          &emsp;In my third year, I was the Head of Product for the
          organization; I was solely responsible for the client selection
          process and also handing off clients to their respective product
          teams. I personally reached out to hundreds of non-profits of varying
          focus within the Los Angeles area and selected the top 3. I
          unfortunately took a leave of absence in order to intern, but I was
          able to complete my duties in my open time.
        </div>
        <div className="mt-2">
          <span className="font-semibold">Skills used: </span>
          <span>React, TailwindCSS, PostgreSQL, TensorFlow, word2vec</span>
        </div>
      </div>
    </div>
  );
};

export default CTC;
