import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../lib/sanity";

export default function BoxSx({content={}}) {
  const {aboutTitle="", body=[]} = content

  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ maxWidth: {xs: "none", md: "80vw"} }}
      >
        <Grid item sx={{mb: 0 }}>
          <Typography variant="h2" gutterBottom sx={{fontWeight: "700"}}>
            {Object.keys(content).length !== 0 ? aboutTitle : "Title"}
          </Typography>
        </Grid>
        <Grid item>
          {Object.keys(content).length !== 0 ? (<PortableText
            value={body}
            components={ptComponents}
          />) : (<Typography variant="h3" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>)}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
