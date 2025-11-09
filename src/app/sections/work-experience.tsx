import React from "react";
import Image from "next/image";
import Heading from "app/components/ui/heading";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";

const WorkExperienceHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="relative w-full text-center text-xl font-bold md:text-left">
      <span className="relative w-fit">
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="85"
          viewBox="0 0 138 85"
          fill="none"
          className="absolute top-[10px] right-[calc(100%+4px)] h-[26px] w-[44px] md:top-[0px] md:right-[calc(100%+8px)] md:left-auto md:h-[47.5px] md:w-[64px] md:translate-x-0 lg:h-[85px] lg:w-[128px]"
        >
          <path
            d="M2 42.8246C16.6389 31.6138 35.9 22.3362 54.8068 26.4141C66.8895 29.0202 77.5765 40.2514 78.8327 52.585C80.0191 64.2332 76.3221 76.5231 64.8176 81.1871C58.821 83.6181 52.5198 83.107 48.7289 77.3258C42.9371 68.4935 48.1768 54.4814 53.9488 47.0434C71.9618 23.8308 105.71 10.0508 134.75 15.3308"
            stroke="#5A4B8E"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M117.176 2C121.599 4.65385 131.507 11.0231 135.753 15.2692"
            stroke="#5A4B8E"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M135.781 15.2688C131.358 17.9226 121.45 24.2919 117.204 28.538"
            stroke="#5A4B8E"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </h3>
  );
};

export default function WorkExperienceSection() {
  // Skills data for mapping
  const designTools = {
    design: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    documentation: ["Webflow", "Notion", "Microsoft Excel"],
  };

  const designExperience = [
    "Wireframes (low → high fidelity)",
    "Prototypes & user flows",
    "Usability testing & design QA",
    "UX research (qualitative + informal methods)",
    "Visual hierarchy & accessibility-conscious design",
  ];

  // Work experience data
  const workExperiences = [
    {
      role: "Lead Product Designer – Plantry",
      period: "2025 - Present",
      description:
        "Designing and refining intuitive user experiences for a meal-planning app that blends AI, culture, and convenience to simplify daily cooking decisions.",
    },
    {
      role: "Marketing Associate – Kirkland Minoxidil",
      period: "2024 - Present",
      description:
        "Manages online product marketing and customer sales, handling social media promotion, direct orders, and timely product delivery to buyers.",
    },
    {
      role: "UI/UX Designer - ArvoFinance",
      period: "2022 - 2024",
      description:
        "Worked on product design, user flows, and design systems for multiple web and mobile applications.",
    },
    // {
    //   role: "Event Operations Assistant - Eventful Nigeria",
    //   period: "2019 - 2021",
    //   description:
    //     "Worked as an usher for large-scale corporate and cultural events, assisting with guest coordination, logistics, and on-site organization.",
    // },
    // {
    //   role: "Artists and Models Manager - CodeBlack records",
    //   period: "2016 - 2019",
    //   description:
    //     "Managed creative talent portfolios, bookings, and promotional collaborations while overseeing artist branding and client communications.",
    // },
  ];

  return (
    <Section id="skills" className="bg-stone-100 dark:bg-neutral-800">
      <Content className="relative">
        <div className="relative z-10 flex flex-col items-center gap-12">
          <Heading>What I Do &amp; How I Work</Heading>

          <div className="w-full">
            <div className="flex flex-col items-start space-y-6 p-0 font-sans">
              <div className="flex w-full flex-col space-y-6 text-lg leading-[normal] font-normal tracking-[0.36px] text-[#1A1A1A] dark:text-white">
                <WorkExperienceHeading>Skill & Tools</WorkExperienceHeading>
                <p className="text-lg text-[#1A1A1A] dark:text-white">
                  Below are the tools and methods I rely on to bring my designs
                  to life.
                </p>

                <div className="font-sans text-lg leading-[normal] tracking-[0.36px] text-[#1A1A1A] dark:text-white">
                  <h3 className="mb-2 font-bold">Tools</h3>
                  <ul className="list-inside list-disc space-y-2 pl-2">
                    <li>
                      <span className="font-medium">Design: </span>
                      {designTools.design.join(" • ")}
                    </li>
                    <li>
                      <span className="font-medium">
                        No-Code & Documentation: &nbsp;
                      </span>
                      {designTools.documentation.join(" • ")}
                    </li>
                  </ul>
                </div>

                <div className="font-sans text-lg leading-[normal] font-normal tracking-[0.36px] text-[#1A1A1A] dark:text-white">
                  <h3 className="mb-2 font-bold">Design Skills</h3>
                  <ul className="list-inside list-disc space-y-2 pl-2">
                    {designExperience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>

                <p className="font-sans text-lg leading-[normal] font-normal tracking-[0.36px] text-[#1A1A1A] dark:text-white">
                  My approach is grounded in user empathy, data, and simplicity.
                  I believe great design comes from understanding real people,
                  and I&#39;m always excited to contribute to thoughtful,
                  purpose-driven teams.
                </p>
              </div>

              <div className="w-full text-lg leading-[normal] font-normal tracking-[0.36px] text-[#1A1A1A] dark:text-white">
                <WorkExperienceHeading>Experience</WorkExperienceHeading>

                <div className="mt-6">
                  {workExperiences.map((experience, index) => (
                    <div key={index} className="mb-2">
                      <span className="font-medium">
                        {experience.role}
                        <br />
                      </span>
                      <span className="font-normal">{experience.period}</span>
                      {index < workExperiences.length - 1 && <br />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 self-end">
                {/*<img src="" alt="Signature" className="h-16" />*/}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <Image
          src="star.svg"
          width={58}
          height={45}
          alt="Highlight decoration"
          className="absolute top-[24px] left-4 h-[25px] w-[32px] md:top-0 md:left-4 md:h-[45px] md:w-[58px] lg:top-0 lg:left-0"
        />
        <Image
          src="blobs.svg"
          width={203}
          height={162}
          alt="Highlight decoration"
          className="absolute top-[20px] right-0 h-[74px] w-[93px] md:right-[-16px] md:h-[162px] md:w-[203px] lg:top-[-20px] lg:right-[0]"
        />
        <Image
          src="/loops.svg"
          width={277}
          height={90}
          alt="Group decoration"
          className="absolute right-[20px] bottom-[200px] h-[41px] w-[110px] md:right-[205px] md:bottom-[180px] md:h-[80px] md:w-[214px] lg:h-[100px] lg:w-[268px]"
        />
      </Content>
    </Section>
  );
}
