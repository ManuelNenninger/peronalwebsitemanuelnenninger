import React from "react";

import HeroSection from "../../organisms/herosection";
import AgreementSection from "../../organisms/agreementsection";
import ProcessTimeline from "../../organisms/processtimeline";
import AboutSection from "../../organisms/aboutsection";
import OfferSection from "../../organisms/offersection";
import BlockSite from "../../organisms/blocksite";
import PortfolioSection from "../../organisms/portfoliosection";
import VisionSection from "../../organisms/visionsection";

export const Module = ({ content = {}, moduleName }) => {
  console.log("Im Module Picker sind daten für: ", moduleName);
  console.log("Im Module Picker ist der Content: ", content);
  const ModuleType = {
    grid: AgreementSection,
    hero: HeroSection,
    process: ProcessTimeline,
    about: AboutSection,
    portfolio: PortfolioSection,
    offer: OfferSection,
    block: BlockSite,
    vision: VisionSection,
  }[moduleName] ?? <></>;

  return <ModuleType content={content} />;
};
