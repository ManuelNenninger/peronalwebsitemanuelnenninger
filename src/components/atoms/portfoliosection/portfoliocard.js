import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../../lib/sanity";

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

export default function PorftolioCard({url="https://www.google.de", title="Test", color="rgb(29, 58, 36)", body=[]}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card
        sx={{
          width: "100%",
          position: "relative",
          borderRadius: 2,
          border: 0
        }}
      >
        <CardActionArea href={url}>
          <CardMedia
            sx={{ position: "relative", backgroundColor: color }}
            component="img"
            height="500"
            width="500"
            //image="https://cdn.netzpolitik.org/wp-upload/2022/08/stable-diffusion-cat-man-rain-860x484.jpg"
            //alt="green iguana"
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              //backgroundImage: `url(https://cdn.netzpolitik.org/wp-upload/2022/08/stable-diffusion-cat-man-rain-860x484.jpg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                  backgroundColor: "rgba( 255, 255, 255, 0.2 )",
                  //opacity: [0.9, 0.8, 0.7],
                  backdropFilter: "blur( 2.5px )",
                }
            }}
          >
            <Typography sx={{ position: "relative", display: {xs: "none", sm: "block"} }} variant="h1" color="text.secondary">
              {title}
            </Typography>
            <Typography sx={{ position: "relative", display: {xs: "block", sm: "none"} }} variant="h3" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </CardActionArea>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{p: 1}}
        >
          <ExpandMoreIcon fontSize="large" color="secondary" />{" "}
        </ExpandMore>{" "}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            { body.length !== 0 ?
              <PortableText
              value={body}
              components={ptComponents}
              /> :
            (<Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>)
            }
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
