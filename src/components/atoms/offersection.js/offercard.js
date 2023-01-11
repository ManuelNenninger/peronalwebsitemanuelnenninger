import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "../../../../lib/sanity";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OutlinedCard(props, index) {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const AngebotsCard = ({ icon = "", title = "", body = [] }) => {
    return (
      <>
        <Card
          variant="outlined"
          sx={{
            p: 0,
            m: 0,
            backgroundColor: theme.palette.secondary.main,
            border: 3,
            borderColor: theme.palette.text.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
              //opacity: [0.9, 0.8, 0.7],
              backdropFilter: "blur( 2.5px )",
            },
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0}
              sx={{
                minHeight: 500,
                width: "100%",
                pr: 6,
              }}
            >
              <Grid item>
                <Typography
                  sx={{ fontWeight: "700" }}
                  variant="h2"
                  color="text.secondary"
                  gutterBottom
                >
                  {"0" + (index + 1)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" component="div" color="text.secondary">
                  {title}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: theme.palette.primary.main, py: 1 }} />
          </CardContent>

          <CardActions sx={{ m: 0 }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ p: 0 }}
            >
              <ExpandMoreIcon fontSize="large" color="primary" />{" "}
            </ExpandMore>{" "}
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ px: 2 }}>
            {body.length !== 0 ? (
              <PortableText value={body} components={ptComponents} />
            ) : (
              <Typography variant="subtitle2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            )}
          </Collapse>
        </Card>
      </>
    );
  };

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ width: "100%", pb: { xs: 5, md: 0 } }}
      key={"OfferCard_" + index}
    >
      <AngebotsCard {...props} />
    </Grid>
  );
}
