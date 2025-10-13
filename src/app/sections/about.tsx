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
              <p className="text-lg text-black dark:text-white">
                <span className="font-normal">Hi, I&#39;m </span>
                <span className="font-semibold">Shaguy Tor David</span>
                <span className="font-normal">
                  , a passionate and detail-oriented{" "}
                  <span className="font-semibold">UI/UX Designer</span> with a
                  background in Library and Information Science, which gives me
                  a strong edge in user empathy, research, and information
                  architecture.
                </span>
              </p>

              <p className="text-lg text-black dark:text-white">
                I&#39;m driven by a desire to design{" "}
                <span className="font-semibold">
                  meaningful and intuitive digital experiences
                </span>{" "}
                that are both user-centered and business-aligned. With a unique
                skill set that combines{" "}
                <span className="font-semibold">UX thinking</span>,{" "}
                <span className="font-semibold">visual design</span>, and{" "}
                <span className="font-semibold">QA testing</span>, I enjoy
                crafting interfaces that don&#39;t just look great, but actually
                solve problems and delight users.
              </p>

              <div className="block text-lg text-black dark:text-white">
                <h2 className="mb-2 font-bold">
                  What I&#39;m passionate about:
                </h2>
                <ul className="list-inside list-disc pl-2">
                  <li>Designing clean, user-friendly interfaces</li>
                  <li>
                    Improving user experiences through research and testing
                  </li>
                  <li>
                    Collaborating with cross-functional teams to bring ideas to
                    life
                  </li>
                </ul>
              </div>

              <p className="text-lg text-black dark:text-white">
                I&#39;m curious, self-driven, and continuously learning. Whether
                it&#39;s jumping into a new design tool or taking on a QA task,
                I thrive in spaces where creativity, collaboration, and purpose
                meet. Outside of work, I&#39;m an introvert with a love for
                cartoons, and a deep appreciation for products built with
                intention.
              </p>

              <p className="text-lg text-black dark:text-white">
                As a self-driven UI/UX designer, I thrive on solving complex
                design challenges and continuously expanding my skill set. I’m
                passionate about contributing to forward-thinking projects and
                collaborating with positive, purpose-driven teams.
              </p>

              <p className="text-lg text-black dark:text-white">
                I taught myself QA because I enjoy seeing products through, from
                ideation to development.
              </p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="https://www.icloud.com/iclouddrive/0f6TH116APzcgvlgWq5en-BVw#Tor_David_Shaguy's_Resume_2"
            rel="noopener noreferrer"
            target="_blank"
            className="h-auto rounded-full bg-[#4a3d7a] p-4 text-white hover:bg-[#3d3264] dark:bg-[#5a4b8e] dark:text-gray-300 dark:hover:bg-[#4a3d7a]"
          >
            Download Resume
          </a>
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
