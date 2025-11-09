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
import { signalRestorationComplete } from "app/components/scroll-restoration-loader";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: "arvo-finance",
    title: "Arvo Finance",
    description:
      "A Nigeria-based fintech app redesigned to make borrowing and online banking seamless, intuitive, and user-focused",
    imageUrl: "/projects/arvo-finance/arvo-finance-frame.svg",
    hasMobile: true,
  },
  {
    id: "oliver-mead",
    title: "Oliver Mead",
    description:
      "A corporate website redesign for a bespoke solutions company, emphasizing structure, design consistency, and scalable UI systems.",
    imageUrl: "/projects/oliver-mead/oliver-mead-frame.svg",
    hasMobile: true,
  },
  {
    id: "arvo-link",
    title: "Arvo Link",
    description:
      "A financial disbursement app designed to simplify complex fund transfers through thoughtful, problem-focused UX and clean, functional design.",
    imageUrl: "/projects/arvo-link/arvo-link-frame.svg",
  },
  {
    id: "performance-metric",
    title: "Performance Metric",
    description:
      "An internal productivity tracking web app redesigned to visualize team performance through clean, efficient, and collaborative design.",
    imageUrl: "/projects/performance-metric/performance-metric-frame.svg",
  },
];

const SCROLL_PROGRESS_KEY = "portfolio-scroll-progress";
const NAVIGATION_FLAG_KEY = "portfolio-navigation-flag";

// Function to save scroll progress (can be called from Project component)
export const saveScrollProgress = () => {
  if (typeof window === "undefined") return;

  // Find the ScrollTrigger for the works section by checking the trigger element
  const triggers = ScrollTrigger.getAll();
  const worksTrigger = triggers.find((trigger) => {
    const triggerElement = trigger.trigger;
    return triggerElement && triggerElement.id === "works";
  });

  if (worksTrigger) {
    sessionStorage.setItem(
      SCROLL_PROGRESS_KEY,
      worksTrigger.progress.toString(),
    );
    // Set flag to indicate we navigated away (not a reload)
    sessionStorage.setItem(NAVIGATION_FLAG_KEY, "true");
  }
};

export default function PortfolioSection() {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      // Kill any existing ScrollTrigger instances to prevent conflicts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (!lenis || !containerRef.current) return;

      // Integrate Lenis with GSAP ticker
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Reset card positions
      const [, ...cards] = cardRefs.current;
      cards.forEach((card) => {
        if (card) {
          gsap.set(card, {
            y: window.innerHeight,
            clearProps: "all",
          });
        }
      });

      // Card position update function
      const updateCardPositions = (
        progress: number,
        immediate = false,
        animationDuration = 0,
      ) => {
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          if (!card) return;

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

          if (immediate) {
            // Use gsap.set for instant positioning
            gsap.set(card, {
              y: yPos,
              x: 0,
            });
          } else {
            gsap.to(card, {
              y: yPos,
              x: 0,
              duration: animationDuration,
              ease: animationDuration > 0 ? "power2.out" : "none",
              overwrite: true, // Kill any existing animations on this property
            });
          }
        });
      };

      // Create ScrollTrigger instance
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "-80px top",
        end: `+=${window.innerHeight * 2}px`,
        pin: true,
        pinSpacing: true,
        scrub: 4,
        onUpdate: (self) => {
          updateCardPositions(self.progress);
        },
      });

      scrollTriggerRef.current = scrollTrigger;

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();

      // Handle scroll to ensure ScrollTrigger stays in sync with Lenis
      const handleScroll = () => {
        ScrollTrigger.update();
        // Ensure card positions are updated when scrolling
        updateCardPositions(scrollTrigger.progress);
        // Save progress continuously
        sessionStorage.setItem(
          SCROLL_PROGRESS_KEY,
          scrollTrigger.progress.toString(),
        );
      };

      // Check if we have a navigation flag (indicates back navigation, not reload)
      const hasNavigationFlag = sessionStorage.getItem(NAVIGATION_FLAG_KEY);

      // Restore scroll progress only if we have the navigation flag (back navigation)
      // Clear flag after checking to reset for next navigation
      const savedProgress = sessionStorage.getItem(SCROLL_PROGRESS_KEY);
      let shouldRestore =
        savedProgress !== null && hasNavigationFlag === "true";

      // Clear the navigation flag after checking
      sessionStorage.removeItem(NAVIGATION_FLAG_KEY);

      if (shouldRestore) {
        const progress = parseFloat(savedProgress!);

        // Wait for ScrollTrigger to be fully initialized and DOM to be ready
        const restoreProgress = () => {
          // Multiple refreshes to ensure positions are calculated correctly
          ScrollTrigger.refresh();
          ScrollTrigger.update();

          // Wait a bit more for ScrollTrigger to calculate start/end
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            ScrollTrigger.update();

            // Use ScrollTrigger's actual calculated start and end values
            // These are in scroll coordinates (pixels from top of document)
            const scrollStart = scrollTrigger.start;
            const scrollEnd = scrollTrigger.end;
            const scrollRange = scrollEnd - scrollStart;
            const targetScrollPosition = scrollStart + scrollRange * progress;

            if (lenis && targetScrollPosition > 0 && scrollRange > 0) {
              // Calculate current scroll position
              const currentScroll = lenis.scroll;
              const scrollDistance = Math.abs(
                targetScrollPosition - currentScroll,
              );

              // Use smooth scroll animation with duration based on distance
              // Duration between 0.8s and 1.5s depending on scroll distance
              const scrollDuration = Math.min(
                Math.max(scrollDistance / 1000, 0.8),
                1.5,
              );

              // Set initial card positions instantly (they start from reset positions)
              // Then animate them to final positions smoothly
              updateCardPositions(0, true); // Set to initial position instantly

              // Animate cards to their final positions with smooth animation
              // Use slightly longer duration than scroll for smoother effect
              updateCardPositions(progress, false, scrollDuration * 0.8);

              // Create a custom scroll handler for restoration
              // This just updates positions without animation during scroll
              const restoreScrollHandler = () => {
                ScrollTrigger.update();
                // Update positions smoothly but let GSAP handle the animation
                // Don't create new animations, just update the target
                updateCardPositions(scrollTrigger.progress, false, 0);
              };

              // Temporarily replace the scroll handler
              lenis.off("scroll", handleScroll);
              lenis.on("scroll", restoreScrollHandler);

              // Scroll smoothly to the calculated position
              lenis.scrollTo(targetScrollPosition, {
                duration: scrollDuration,
                easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
              });

              // Restore normal scroll handler and final sync after animation completes
              setTimeout(
                () => {
                  lenis.off("scroll", restoreScrollHandler);
                  lenis.on("scroll", handleScroll);
                  ScrollTrigger.refresh();
                  ScrollTrigger.update();
                  updateCardPositions(scrollTrigger.progress, false, 0);
                  // Signal that restoration is complete
                  signalRestorationComplete();
                },
                scrollDuration * 1000 + 100,
              ); // Add small buffer
            }
          });
        };

        // Wait longer for everything to be ready - especially for later cards
        // This ensures all sections above have rendered and ScrollTrigger can calculate accurately
        setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              restoreProgress();
            });
          });
        }, 300); // Increased delay to ensure ScrollTrigger is fully initialized
      }

      lenis.on("scroll", handleScroll);

      // Manually update card positions based on current scroll after initialization
      // Only if we didn't restore progress (restoration handles its own update)
      if (!shouldRestore) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            updateCardPositions(scrollTrigger.progress);
          });
        });
      }

      // Cleanup function
      return () => {
        // Kill the ScrollTrigger instance
        if (scrollTrigger) {
          scrollTrigger.kill();
        }

        // Remove Lenis event listener
        lenis.off("scroll", handleScroll);

        // Remove GSAP ticker integration
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [lenis],
      revertOnUpdate: true,
    },
  );

  return (
    <Section
      id="works"
      ref={containerRef}
      className="h-screen w-full overflow-hidden bg-white [contain:layout] dark:bg-[#1A1A1A]"
    >
      <Content className="pt-8">
        <div className="flex w-full max-w-full flex-col items-center gap-12">
          <Heading>
            <div className="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="105"
                viewBox="0 0 126 105"
                fill="none"
                className="absolute top-[-25px] left-[-30px] h-[50px] w-[66px] md:top-[-50px] md:left-[-90px] md:h-[105px] md:w-[126px]"
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
            </div>
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
