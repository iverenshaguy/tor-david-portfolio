import React, { Fragment } from "react";
import AboutSection from "app/sections/about";
import HeroSection from "app/sections/hero";
import PortfolioSection from "app/sections/projects";
import WorkExperienceSection from "app/sections/work-experience";

import Footer from "app/components/footer";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <PortfolioSection />
      <Footer />
    </Fragment>
  );
}
