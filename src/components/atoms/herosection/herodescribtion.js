import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ActionButton from "../buttons/actionButton";
import FancyButton from "../buttons/fancycalltoaction";
import { useTheme } from "@mui/material/styles";
// import { useAppContext } from "../../../appContext";
import HighlighterText from "../wrapperElements/highlighterText";
import SubscribeDialogPopUp from "../dialogPopUp/subscribeDialogPopUp";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "../../../../lib/sanity";

export default function HeroDescribtion({
  heroTitle,
  heroDescribtion,
  primaryCallToAction,
  secondaryCallToAction,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  // const value = useAppContext();
  // let { heroContent } = value.content;
  //Content from Sanity

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Die Responsive Heading wird von Sanity als Block Content unter Custome Heading gerendered.
  const ResponsiveTypography = (props) => {
    return (
      <Typography
        variant={props.variant}
        component="h1"
        sx={{ fontWeight: "700" }}
      >
        Das ist der Hero Title
        {/*<HighlighterText variant={props.variant}>
          nur besser
        </HighlighterText>*/}
      </Typography>
    );
  };
  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pr: { xs: "none", md: 5 }, mt: { xs: 0, md: 0 } }}
        >
          <Grid item sx={{ mb: { xs: 4, md: 0 } }}>
            {/*Fehler Variable.*/}
            {typeof heroTitl !== "string" ? (
              <PortableText value={heroTitle} components={ptComponents} />
            ) : (
              <ResponsiveTypography variant="h1" />
            )}
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h2" sx={{ mb: 6 }}>
              {heroDescribtion}
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
              >
                {/*<Grid item md={6} xs={12}>
                  <FancyButton href="/preis"/>
                </Grid>*/}
                <Grid item md={6} xs={12}>
                  <ActionButton
                    fullWidth
                    variant="contained"
                    size="large"
                    text="Say Hello"
                    secondaryColor
                    //className="fanceCallToAction"
                    onClick={handleClickOpen}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <SubscribeDialogPopUp open={open} handleClose={handleClose} />
      </Box>
    </>
  );
}
