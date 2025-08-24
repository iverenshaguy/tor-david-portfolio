"use client";

import React, { useRef } from "react";

import { useLenis } from "lenis/react";
import Heading from "app/components/ui/heading";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";
import { Project } from "app/components/project";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: "arvo-finance",
    title: "Arvo Finance",
    description:
      "ArvoFinance began an upgrade and redesign of it's mobile application and web application with the vision of becoming the next best Fintech owned app in Nigeria.",
    imageUrl: "/projects/arvo-finance/arvo-finance-frame.svg",
    hasMobile: true,
  },
  {
    id: "oliver-mead",
    title: "Oliver Mead",
    description:
      "This website was created to tell individuals what they need to know about Oliver Mead and it also answers frequently asked questions.",
    imageUrl: "/projects/oliver-mead/oliver-mead-frame.svg",
    hasMobile: true,
  },
  {
    id: "arvo-link",
    title: "Arvo Link",
    description:
      "The project was given to my team by one of the political parties in Nigeria sometime before the general election that was held last year.",
    imageUrl: "/projects/arvo-link/arvo-link-frame.svg",
  },
  {
    id: "performance-metric",
    title: "Performance Metric",
    description:
      "This project was brought up within the Tech team at Oliver Mead to help us keep track of how well every member of the tech team is performing.",
    imageUrl: "/projects/performance-metric/performance-metric-frame.svg",
  },
];

export default function PortfolioSection() {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const handleScroll = () => ScrollTrigger.update();

      lenis?.on("scroll", handleScroll);

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const [, ...cards] = cardRefs.current;

      cards.forEach((card) => {
        gsap.set(card, {
          y: window.innerHeight,
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        // start 80px below the beginning of the page, this leaves space for the navbar
        start: "-80px top",
        end: `+=${window.innerHeight * 2}px`,
        pin: true,
        pinSpacing: true,
        scrub: 4,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = cards.length;
          const progressPerCard = 1 / totalCards;

          cards.forEach((card, index) => {
            const cardStart = index * progressPerCard;
            let cardProgress = (progress - cardStart) / progressPerCard;
            cardProgress = Math.min(Math.max(cardProgress, 0), 1);

            const stackOffset = (index + 1) * 40;

            // Responsive peek offset for the second card
            let peekOffset;
            if (index === 0) {
              if (window.innerWidth < 640) {
                // Mobile
                peekOffset = window.innerHeight * 0.4;
              } else if (window.innerWidth < 1024) {
                // Tablet
                peekOffset = window.innerHeight * 0.5;
              } else {
                // Desktop
                peekOffset = 240;
              }
            } else {
              peekOffset = window.innerHeight * 0.05; // Others barely peek
            }

            const yPos =
              window.innerHeight * (1 - cardProgress) +
              stackOffset -
              peekOffset * (1 - cardProgress);

            gsap.to(card, {
              y: yPos,
              x: 0,
              duration: 0,
              ease: "none",
            });
          });
        },
      });

      return () => {
        lenis?.destroy();
      };
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <Section
      id="works"
      ref={containerRef}
      // h-[calc(105px_+_var(--section-height))]
      className="h-screen w-screen overflow-scroll bg-white dark:bg-[#1A1A1A]"
    >
      <Content className="pt-8">
        <div className="flex flex-col items-center gap-12">
          <Heading>
            <span className="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="105"
                viewBox="0 0 126 105"
                fill="none"
                className="absolute top-[-20px] left-[-30px] h-[50px] w-[66px] md:top-[-50px] md:left-[-90px] md:h-[105px] md:w-[126px]"
              >
                <path
                  d="M63.8124 59.2485C63.8124 59.2485 37.0659 56.3772 17.1405 62.2661"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M83.5641 46.9853C83.5641 46.9853 76.061 17.9032 81.7812 8.26636"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M61.4406 78.1287C61.4406 78.1287 28.06 89.1628 22.4539 94.529"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="max-w-[280px] md:max-w-[600px] lg:max-w-[800px]">
                Selected works from 2022 till date
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="175"
                height="64"
                viewBox="0 0 175 64"
                fill="none"
                className="absolute top-[-15px] right-[-45px] h-[64px] w-[80px] md:top-[-10px] md:right-[-125px] md:h-[64px] md:w-[175px]"
              >
                <path
                  d="M79.8201 30.8228C79.8201 30.8228 109.694 24.5892 161.871 33.9971"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M66.0235 39.9644C66.0235 39.9644 89.0176 52.4978 90.1327 58.9207"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M71.1476 19.7212C71.1476 19.7212 95.594 17.3979 112.305 6.55981"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </Heading>

          <div className="relative h-[calc(100vh_-_120px)] w-full space-y-4">
            {projects.map((project, index) => (
              <Project
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (el) {
                    cardRefs.current[index] = el;
                  }
                }}
                project={project}
                className={`absolute top-[235px] left-1/2 -translate-[50%] will-change-transform z-[${10 * index}] last:mb-16`}
              />
            ))}
          </div>
        </div>
      </Content>
    </Section>
  );
}
