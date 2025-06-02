import React from "react";
import Image from "next/image";
import Heading from "app/components/ui/heading";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";

export default function AboutSection() {
  return (
    <Section id="about" className="shadow-card-shadow bg-white">
      <Content>
        <div className="flex flex-col items-center gap-12">
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
                className="absolute top-[4px] left-[-80%]"
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
              <p className="text-lg text-black">
                <span className="font-normal">My name is </span>
                <span className="font-bold">Shaguy Tor David</span>
                <span className="font-normal">
                  . I am a passionate and detail-oriented UI/UX Designer with a
                  background in Library and information Science which gives me a
                  unique edge in empathising with users needs and it equips me
                  with a strong foundation in user research and information
                  organisation.
                </span>
              </p>

              <p className="text-lg text-black">
                I am passionate about crafting stunning, user-friendly,
                intuitive and engaging digital experiences that drive results.
                With a unique skill set that combines user-centered design
                principles and QA skills, I am able to create designs that meet
                business objectives and delight users.
              </p>

              <div className="block text-lg text-black">
                I am also passionate about:
                <ul className="list-inside list-disc pl-2">
                  <li>Designing user-friendly interfaces</li>
                  <li>Ensuring optimal user experiences</li>
                  <li>Collaborating with cross-functional teams</li>
                </ul>
              </div>

              <p className="text-lg text-black">
                I am a very organised person, always comfortable learning new
                things, fast learner, problem solver, cartoon lover, Introverted
                person and interactive.
              </p>

              <p className="text-lg text-black">
                I&#39;m a self-motivated learner and enjoy tackling challenges.
                I&#39;m excited to contribute my skills to ambitious projects
                and work with positive, like-minded individuals.
              </p>

              <p className="text-lg text-black">
                I taught myself QA because I enjoy working on products from
                beginning to end, from ideation to development.
              </p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="https://www.icloud.com/iclouddrive/0f6TH116APzcgvlgWq5en-BVw#Tor_David_Shaguy's_Resume_2"
            rel="noopener noreferrer"
            target="_blank"
            className="h-auto rounded-full bg-[#4a3d7a] p-4 text-white hover:bg-[#3d3264]"
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
          className="pointer-events-none absolute top-[40px] left-[316px] z-0 w-[20%] max-w-[90px]"
        />

        <Image
          src="looper-3.svg"
          width={514}
          height={526}
          alt="Looper decoration"
          className="pointer-events-none absolute top-[-80px] right-[111px] z-0 w-[30%] max-w-[514px]"
        />
      </Content>
    </Section>
  );
}
