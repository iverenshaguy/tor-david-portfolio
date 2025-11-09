import React from "react";
import Image from "next/image";
import Heading from "app/components/ui/heading";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="shadow-card-shadow bg-white dark:bg-[#1A1A1A]"
    >
      <Content>
        <div className="relative z-10 flex flex-col items-center gap-12">
          {/* Section Header */}
          <Heading>
            <span className="relative inline-block">
              About me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="430"
                height="45"
                viewBox="0 0 501 45"
                fill="none"
                className="absolute top-[24px] left-[-20%] aspect-[53/40] h-[18px] w-[200px] md:top-[4px] md:left-[-80%] md:aspect-auto md:h-[41px] md:w-[400px] lg:top-[4px] lg:left-[-80%] lg:h-[45px] lg:w-[430px]"
              >
                <path
                  d="M2 2C79.2556 26.4015 286.813 65.4606 499 26.4848"
                  stroke="#5A4B8E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </Heading>

          {/* About Content */}
          <div className="w-full">
            <div className="space-y-6 p-0 font-sans">
              <p className="text-lg text-[#1A1A1A] dark:text-white">
                <span className="font-normal">
                  I’m a <span className="font-bold">UI/UX Designer</span> with
                  experience conducting QA tests for websites and applications,
                  ensuring both design excellence and functional quality.
                </span>
              </p>

              <p className="text-lg text-[#1A1A1A] dark:text-white">
                Skilled in tools like <span className="font-bold">Figma</span>,{" "}
                <span className="font-bold">Webflow</span>,{" "}
                <span className="font-bold">Notion</span>,{" "}
                <span className="font-bold">Excel</span>,{" "}
                <span className="font-bold">Adobe Illustrator</span>, and{" "}
                <span className="font-bold">wireframes</span>,
                <span className="font-bold">prototypes</span>, and{" "}
                <span className="font-bold">high-fidelity mockups</span> that
                blend creativity with usability. My design approach is{" "}
                <span className="font-bold">data-driven</span> and{" "}
                <span className="font-bold">user-focused</span>, grounded in{" "}
                <span className="font-bold">research</span> and{" "}
                <span className="font-bold">testing</span>.
              </p>

              <p className="text-lg text-[#1A1A1A] dark:text-white">
                My journey includes designing at Oliver Mead Investment
                (2022–2024) and collaborating across diverse creative industries
                before transitioning into tech. These experiences help me bring
                empathy, structure, and creativity to every project.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <Image
          src="love.svg"
          width={119}
          height={91}
          alt="Highlight decoration"
          className="pointer-events-none absolute top-[20px] left-[20px] z-0 w-[24%] max-w-[60px] md:top-[48px] md:left-[48px] md:w-[20%] md:max-w-[90px] lg:top-[40px] lg:left-[316px] lg:w-[20%] lg:max-w-[90px]"
        />

        <Image
          src="looper-3.svg"
          width={514}
          height={526}
          alt="Looper decoration"
          className="pointer-events-none absolute top-[-40px] right-[10px] z-0 w-[30%] max-w-[200px] md:top-[-80px] md:right-[40px] md:w-[30%] md:max-w-[350px] lg:top-[-80px] lg:right-[111px] lg:w-[30%] lg:max-w-[514px]"
        />
      </Content>
    </Section>
  );
}
