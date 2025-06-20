import React from "react";
import { Navbar } from "app/components/navbar";
import Image from "next/image";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";

export const HeroSection = () => {
  return (
    <Section className="shadow-custom-hero flex h-screen flex-col overflow-hidden bg-stone-100 py-0! lg:max-h-[900px] lg:min-h-[850px] dark:bg-neutral-800">
      <Navbar />
      <Content className="flex h-[calc(100vh-var(--sticky-navbar-height))] flex-grow flex-col items-center justify-center gap-8 text-center md:gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:text-left">
        <div className="z-10 flex w-full flex-col items-center gap-8 pt-10 md:pt-16 lg:max-w-[600px] lg:flex-1 lg:items-start lg:py-0">
          <h2 className="font-sans text-lg font-medium tracking-[0.50px] text-[#4F4F4F] md:text-2xl lg:text-xl dark:text-neutral-400">
            ✌ Hi, I&apos;m David Shaguy,{" "}
            <span className="relative inline-block">
              a UI/UX Designer and I&apos;m...
              <svg
                className="h-[25px] w-[259.84px]"
                xmlns="http://www.w3.org/2000/svg"
                width="264"
                height="29"
                viewBox="0 0 264 29"
                fill="none"
              >
                <path
                  d="M2 2C2 2 213.699 2 219.796 2C225.892 2 98.4943 10.3333 91.1364 10.6957C83.7784 11.058 217.063 16.4022 223.369 16.4022C229.676 16.4022 120.568 23.0145 126.244 23.0145C131.92 23.0145 261.841 27 261.841 27"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <div className="px-10 md:px-20 lg:px-0">
            <h1 className="font-sans text-2xl leading-[1.4] font-bold tracking-[0.8px] text-black md:text-4xl md:leading-normal lg:text-5xl lg:leading-tight lg:tracking-[1.00px] dark:text-gray-400">
              Promoting <br />
              establishments by
              {/*<br />*/} creating empathetic
              {/*<br />*/} product experiences
            </h1>
          </div>
        </div>

        <div className="relative z-0 h-full w-full lg:relative lg:mt-0 lg:w-1/2 lg:flex-1">
          <Image
            src="/profile-image-grouped.png"
            alt="Profile"
            width={771}
            height={925}
            className="absolute bottom-0 left-1/2 h-[100%] w-auto -translate-x-[53%] translate-y-[7%] transform object-contain md:-translate-y-0 lg:absolute lg:right-[-10%] lg:bottom-0 xl:h-auto"
          />
        </div>
      </Content>
    </Section>
  );
};

export default HeroSection;
