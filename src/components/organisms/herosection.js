import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroDescribtion from "../atoms/herosection/herodescribtion";
import HeroPicture from "../atoms/herosection/heropicture";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper";
import Transition from "../atoms/wrapperElements/transition";
import Intro from "./intro";

export default function HeroSection({ content = {}, onVariantChange = {} }) {
  let {
    heroTitle = "Hier sollte der HeroTitle stehen.",
    heroDescribtion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mainImage,
    primaryCallToAction,
    secondaryCallToAction,
  } = content;
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <Intro setLoading={setLoading} loading={loading} />
      <SectionWrapper firstSectionDistance>
        {!loading && (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ minHeight: "100%" }}
            spacing={3}
            //Alternative Positionierung durch padding & margin
            //sx={{ pr: { xs: "none", md: 15 }, mt: {xs: 10, md: 0} }}
          >
            <Grid item xs={12} md={6} sx={{}}>
              <Transition xTransition={"fromLeft"}>
                <HeroDescribtion
                  heroTitle={heroTitle}
                  heroDescribtion={heroDescribtion}
                  primaryCallToAction={primaryCallToAction}
                  secondaryCallToAction={secondaryCallToAction}
                />
              </Transition>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Transition xTransition={"fromRight"}>
                <HeroPicture mainImage={mainImage} />
              </Transition>
            </Grid>
          </Grid>
        )}
      </SectionWrapper>
    </>
  );
}
