"use client";

import React, { useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { Project } from "app/components/project";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function StackedScrollStepReveal({
  projects,
}: {
  projects: {
    id: string;
    title: string;
    role: string;
    description: string;
    responsibilities: string;
    imageUrl: string;
    hasMobile?: boolean;
  }[];
}) {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  console.log(cardRefs);

  useGSAP(
    () => {
      const handleScroll = () => ScrollTrigger.update();

      lenis?.on("scroll", handleScroll);

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const cards = cardRefs.current;
      const rotations = [-12, 10, -5, 5, -5, -2];

      cards.forEach((card, index) => {
        gsap.set(card, {
          y: window.innerHeight,
          rotate: rotations[index],
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 4}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = cards.length;
          const progressPerCard = 1 / totalCards;

          cards.forEach((card, index) => {
            const cardStart = index * progressPerCard;
            let cardProgress = (progress - cardStart) / progressPerCard;
            cardProgress = Math.min(Math.max(cardProgress, 0), 1);

            let yPos = window.innerHeight * (1 - cardProgress);
            let xPos = 0;

            if (cardProgress === 1 && index < totalCards - 1) {
              const remainingProgress =
                (progress - (cardStart + progressPerCard)) /
                (1 - (cardStart + progressPerCard));
              if (remainingProgress > 0) {
                const distanceMultiplier = 1 - index * 0.15;
                xPos =
                  -window.innerWidth *
                  0.3 *
                  distanceMultiplier *
                  remainingProgress;
                yPos =
                  -window.innerHeight *
                  0.3 *
                  distanceMultiplier *
                  remainingProgress;
              }
            }

            gsap.to(card, {
              y: yPos,
              x: xPos,
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
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`relative h-screen py-10`}>
      {/*<div className="mx-auto flex h-[464px] w-full flex-col items-start gap-[50px]">*/}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`transform-[translate(-50%, -50%)] z-[index * 10] absolute top-1/2 left-1/2 h-1/2 w-1/4 bg-[red] will-change-transform`}
          ref={(el) => {
            if (el) {
              cardRefs.current[index] = el;
            }
          }}
        >
          {project.description}
          {/*<Project project={project} />*/}
        </div>
        // <StackSlideItem
        //   key={index}
        //   isVisible={index <= currentIndex}
        //   zIndex={10 - index}
        //   onAnimationEndAction={() => {
        //     if (index === currentIndex) {
        //       setCurrentIndex((prev) => prev + 1);
        //       setIsAnimating(false);
        //     }
        //   }}
        // >
        //   <Project project={project} />
        // </StackSlideItem>
      ))}
      {/*</div>*/}
    </div>
  );
}

export default function LenisWrapper({
  projects,
}: {
  projects: {
    id: string;
    title: string;
    role: string;
    description: string;
    responsibilities: string;
    imageUrl: string;
    hasMobile?: boolean;
  }[];
}) {
  return (
    <ReactLenis>
      <StackedScrollStepReveal projects={projects} />
    </ReactLenis>
  );
}
