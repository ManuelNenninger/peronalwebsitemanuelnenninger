import React from "react";

import HeroSection from "../organisms/herosection";
import AgreementSection from "../organisms/agreementsection";
import ProcessTimeline from "../organisms/processtimeline";
import AboutSection from "../organisms/aboutsection";
import OfferSection from "../organisms/offersection";
import BlockSite from "../organisms/blocksite";
import PortfolioSection from "../organisms/portfoliosection";
import VisionSection from "../organisms/visionsection";

const Notfall = (props) => {
  return <h1>Ups</h1>;
};

export const Module = ({ content, moduleName }) => {
  const ModuleType =
    {
      grid: AgreementSection,
      hero: HeroSection,
      process: ProcessTimeline,
      about: AboutSection,
      portfolio: PortfolioSection,
      offer: OfferSection,
      block: BlockSite,
      vision: VisionSection,
    }[moduleName] ?? Notfall;

  return <ModuleType content={content} />;
};
