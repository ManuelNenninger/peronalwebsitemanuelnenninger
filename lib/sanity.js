import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      let { position = "center" } = value;
      if (position === "right") {
        //return Grid, damit Image rechts ist
        console.log("Image should be right");
      }
      if (position === "left") {
        //return Grid, damit Image links ist
        console.log("Image should be left");
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(700).height(350).fit("max").auto("format")}
        />
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <Typography variant="h1" gutterBottom>
        <p>{children}</p>
      </Typography>
    ),
    h2: ({ children }) => {
      return (
        <>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "500" }}>
              {children}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "500" }}>
              {children}
            </Typography>
          </Box>
        </>
      );
    },
    h3: ({ children }) => (
      <Typography variant="h3" gutterBottom>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" gutterBottom>
        <p>{children}</p>
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" gutterBottom>
        <p>{children}</p>
      </Typography>
    ),
    body1: ({ children }) => (
      <Typography variant="body1" gutterBottom>
        <p>{children}</p>
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography variant="subtitle1" gutterBottom component="div">
        <p>{children}</p>
      </Typography>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">
        <p>{children}</p>
      </blockquote>
    ),

    // Ex. 2: rendering custom styles
    //Für Hero Section Title
    customHeading: ({ children }) => {
      return (
        <>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              variant="h1"
              gutterBottom
              component="h1"
              sx={{ fontWeight: "700" }}
            >
              {children}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: "700" }}>
              {children}
            </Typography>
          </Box>
        </>
      );
    },
    customBoldText: ({ children }) => {
      return (
        <>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "500" }}>
              {children}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "500" }}>
              {children}
            </Typography>
          </Box>
        </>
      );
    },
  },
  //Der Marker besitzt eine ClassName die über CSS angepasst wird
  marks: {
    highlight: ({ children }) => {
      return <span className="highlight">{children}</span>;
    },
    gradientText: ({ children }) => {
      return <span className="gradientText">{children}</span>;
    },
  },
};

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};
