import React from "react";
import AboutSection from "app/sections/about";
import HeroSection from "app/sections/hero";
import PortfolioSection from "app/sections/projects";
import WorkExperienceSection from "app/sections/work-experience";
import Footer from "app/components/footer";
import ReactLenis from "lenis/react";
import { Navbar } from "app/components/navbar";
import { ScrollRestorationLoader } from "app/components/scroll-restoration-loader";

export default function Home() {
  return (
    <ScrollRestorationLoader>
      <body className="relative min-h-[100vh]">
        <Navbar />
        <main className="flex min-w-0 flex-auto flex-col scroll-smooth antialiased md:px-0">
          <ReactLenis root>
            <HeroSection />
            <AboutSection />
            <WorkExperienceSection />
            <PortfolioSection />
            <Footer />
          </ReactLenis>
        </main>
      </body>
    </ScrollRestorationLoader>
  );
}
