import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LocalDrinkTwoToneIcon from "@mui/icons-material/LocalDrinkTwoTone";
import OfferCard from "../atoms/offersection.js/offercard";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"

const ContentArray = [
  {
    icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    title: "Lorem Ipsum",
    body: "lala"
  },
  {
    icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    title: "Lorem Ipsum und mehr",
    body: "lala"
  },
  {
    icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    title: "Lorem Ipsum",
    body: "lala"
  }
];

export default function BoxSx({content={}}) {
  const {sectiontitle="Headline Text", offercardbuilder=[]} = content;

  const MainGrid = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={{xs: 0, md: 5}}
        >
          {
            Object.keys(content).length !== 0 ?
            offercardbuilder.map(function (ContentObject, index) {
              return OfferCard(ContentObject, index);
            })
            :
            ContentArray.map(function (ContentObject, index) {
              return OfferCard(ContentObject, index);
            })
          }
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper topDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item sx={{pb: 10}}>
          <Typography variant="h2" gutterBottom sx={{fontWeight: "700", display: {xs: "none", sm: "block"}}}>
            {sectiontitle}
          </Typography>
          <Typography variant="h3" gutterBottom sx={{fontWeight: "700", display: {xs: "block", sm: "none"}}}>
            {sectiontitle}
          </Typography>
        </Grid>
        <Grid item sx={{ width: "100%",  }}>
          <MainGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
