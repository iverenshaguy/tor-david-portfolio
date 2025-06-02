import React from "react";
import { Navbar } from "app/components/navbar";
import Image from "next/image";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";

export const HeroSection = () => {
  return (
    <Section className="shadow-custom-hero flex h-screen max-h-[900px] flex-col overflow-hidden bg-stone-100 py-0! lg:min-h-[850px]">
      <Navbar />
      <Content className="gap-2x flex flex-grow items-center justify-start">
        <div className="z-10 flex w-full max-w-[600px] flex-1 flex-col gap-2.5 py-8">
          <h2
            className={`font-sans text-lg font-medium tracking-[0.50px] text-[#4F4F4F] lg:text-xl`}
          >
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
                  stroke="#4F4F4F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <div className="mt-8">
            <h1 className="max-w-[550px] font-sans text-4xl leading-tight font-bold tracking-[1.00px] text-black lg:text-5xl">
              Promoting <br />
              establishments by
              <br />
              creating empathetic
              <br />
              product experiences
            </h1>
          </div>
        </div>

        <div className="relative z-0 h-full flex-1">
          <Image
            src="/blob-1.svg"
            alt=""
            width={482}
            height={501}
            className="pointer-events-none absolute top-[35%] right-0 -z-10 w-[70%] max-w-[500px]"
          />

          <Image
            src="/profile-image.png"
            alt="Profile"
            width={757}
            height={925}
            className="absolute right-0 bottom-0 h-[90%] object-contain"
          />

          <Image
            src="/blob-2.svg"
            alt="Vector decoration"
            width={224}
            height={150}
            className="pointer-events-none absolute top-[60%] left-0 -z-10 w-[30%] max-w-[500px]"
          />
        </div>
      </Content>
    </Section>
  );
};

export default HeroSection;
