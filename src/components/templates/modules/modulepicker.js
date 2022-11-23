import React from 'react'

import HeroSection from "../../organisms/herosection";
import AgreementSection from "../../organisms/agreementsection";
import ProcessTimeline from "../../organisms/processtimeline";
import AboutSection from "../../organisms/aboutsection";
import OfferSection from "../../organisms/offersection";
// import MoreInforSection from "../../organisms/moreInfoSection/moreInfoSection";
import PortfolioSection from "../../organisms/portfoliosection";

export const Module = ({
  index,
  data,
  product,
  activeVariant,
  onVariantChange,
  content={},
  moduleName=""
}, ) => {

  const ModuleType = {
    grid: AgreementSection,
    hero: HeroSection,
    timeline: ProcessTimeline,
    about: AboutSection,
    portfolio: PortfolioSection,
    offer: OfferSection,
  }[moduleName] ?? <></>

  return (
    <ModuleType
      index={index}
      data={data}
      product={product}
      activeVariant={activeVariant}
      onVariantChange={onVariantChange}
      content={content}
    />
  )
}
