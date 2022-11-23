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
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function OutlinedCard(props, index) {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const AngebotsCard = ({ Icon = "", Titel = "", Describtion = "",}) => {
    return (
      <>
        <Card variant="outlined" sx={{
          p: 0,
          m: 0,
          backgroundColor: theme.palette.secondary.main,
          border: 0,
          "&:hover": {
              backgroundColor: "rgba( 90, 128, 147, 0.8 )",
              //opacity: [0.9, 0.8, 0.7],
              backdropFilter: "blur( 2.5px )",
            }
          }}>
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
                pr: 6
              }}
            >
              <Grid item>
                <Typography
                  sx={{ fontWeight: "700" }}
                  variant="h2"
                  color="text.secondary"
                  gutterBottom
                >
                  {"0" + (index+1)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" component="div">
                  {Titel}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{borderColor: theme.palette.primary.main, py: 1}} />
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
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </Collapse>
        </Card>
      </>
    );
  };

  return (
    <Grid item xs={12} md={4} sx={{ width: "100%", pb: {xs: 5, md: 0} }} key={"OfferCard_" + index}>
      <AngebotsCard {...props}/>
    </Grid>
  );
}
