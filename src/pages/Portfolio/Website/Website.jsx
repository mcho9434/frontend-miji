import React from "react";

const Website = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xl font-semibold mr-4 ">Personal Website</span>
        </div>
        <span className="text-lg italic">2022 Winter Break</span>
      </div>
      <div className="mt-4">
        <div>
          &emsp;After my internship, I had a rare gap of free time, no upcoming
          exams or projects on my horizon. To keep busy, I decided to utilize
          everything I'd learned in my past and finally commit to creating a
          personal website.
        </div>
        <div>
          &emsp;I started off by spending some time setting up my development
          environment. I'd had enough development experience to have defensible
          preferences for different frameworks and libraries to use. For
          example, I selected TailwindCSS for its utility first focus, giving me
          super fast development. However, I do recognize it does result in
          somewhat poor readability and results in repeating styles. As I was
          and likely am the only developer, I was willing to accept the
          tradeoff(this also allowed super fast styling; this site was complete
          in 5 days).
        </div>
        <div>
          &emsp;I took the advice of many of my mentors to get as many
          iterations on product development as I could and reached out to my
          design-focused peers to get a proper design(color palettes, component
          system) for the website. It was great to be able to talk about
          preferences as a client, but also talk about engineering tasks as the
          developer.
        </div>
      </div>
      <div className="mt-2">
        <span className="font-semibold">Skills used: </span>
        <span>React, TailwindCSS, Material-UI</span>
      </div>
    </div>
  );
};

export default Website;
