import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../lib/sanity";
import { useTheme } from '@mui/material/styles';

export default function BoxSx({content={}}) {
  const theme = useTheme();
  const {sectiontitle="Vision", body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua."} = content;

  return (
    <SectionWrapper topDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {" "}
        <Typography variant="h4" gutterBottom sx={{borderBottom: 4, borderColor: theme.palette.secondary.main}}>
          {sectiontitle}
        </Typography>
        {typeof body !== 'string' ?
          (<PortableText
          value={body}
          components={ptComponents}
        />) : (
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
              backgroundClip: "text",
              textFillColor: "transparent"
            }}
          >

            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Typography>
        )}
      </Grid>
    </SectionWrapper >
  );
}
