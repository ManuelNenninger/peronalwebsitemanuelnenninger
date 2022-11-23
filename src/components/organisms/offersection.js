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
    Icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    Titel: "Lorem Ipsum",
    Describtion: "lala"
  },
  {
    Icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    Titel: "Lorem Ipsum und mehr",
    Describtion: "lala"
  },
  {
    Icon: <LocalDrinkTwoToneIcon fontSize="large" />,
    Titel: "Lorem Ipsum",
    Describtion: "lala"
  }
];

export default function BoxSx() {

  const MainGrid = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={{xs: 0, md: 5}}
          sx={{ width: "100%" }}
        >
          {ContentArray.map(function (ContentObject, index) {
            return OfferCard(ContentObject, index);
          })}
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
        sx={{ }}
      >
        <Grid item sx={{pb: 10}}>
          <Typography variant="h2" gutterBottom sx={{fontWeight: "700"}}>
            h1. Heading
          </Typography>
        </Grid>
        <Grid item sx={{ width: "100%",  }}>
          <MainGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
