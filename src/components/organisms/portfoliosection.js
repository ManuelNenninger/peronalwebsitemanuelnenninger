import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import PortfolioCard from "../atoms/portfoliosection/portfoliocard";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import ActionButton from "../atoms/buttons/actionButton"

export default function BoxSx() {
  const [more, setMore] = React.useState(4);

  const array = [0, 1,2,3,4 ];
  const fullLength = array.length;
  const handleState = () => {

    setMore(fullLength);
  };


  return (
    <SectionWrapper topDistance >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid item sx={{ pb: 10 }}>
          <Typography variant="h2" gutterBottom sx={{fontWeight: "700"}}>
            This is a Title
          </Typography>
        </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{width: "100%"}}
          >
            {array.slice(0, more).map((_, index) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <PortfolioCard />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={5}
        >
        {more < fullLength && (
          <Grid item sx={{width: "100%", display: "flex", justifyContent: "center", mt: 5}}>
              <ActionButton variant="outlined" text="Mehr" secondaryColor onClick={handleState} sx={{px: 5}}/>
            </Grid>
        )}
      </Grid>
    </SectionWrapper>
  );
}
