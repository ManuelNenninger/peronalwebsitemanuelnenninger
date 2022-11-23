import { createTheme } from '@mui/material/styles';

// Create a theme instance.
//typography: Base Scale 14px und Scale 1.2 theme.palette.primary.dark
const theme = createTheme({
  palette: {
     primary: {
       main: '#F0ECE0',
       light: "rgba( 222, 222, 210, 0.6 )",
     },
    secondary: {
      main: '#5A8093',
      light: "rgba(29, 58, 36, 0.55)",
    },
    error: {
      main: "rgb(97, 53, 38)",
    },
    text: {
      subtitleColor: "#3D3D3D",
    },
    borderColor: {
      main: '#DAD9CD',
      dark: '#292727',
    },
    text: {
      main: '#172126',
      secondary: '#F0ECE0',
    },
  },
  typography: {
        fontFamily: "'DM Sans', sans-serif",
  //   h1: {
  //     fontSize: "2.986rem",
  //   },
  //   h2: {
  //     fontSize: "2.488rem",
  //   },
  //   h3: {
  //     fontSize: "2.074rem",
  //   },
  //   h4: {
  //     fontSize: "1.728rem",
  //   },
  //   h5: {
  //     fontSize: "1.44rem",
  //   },
  //   h6: {
  //     fontSize: "1.2rem",
  //   },
  //   subtitle1: {
  //     fontSize: "1rem",
  //     lineHeight: "1.8rem",
  //   },
  //   subtitle2: {
  //     fontSize: "0.833rem",
  //   },
  //   body1: {
  //     fontSize: "1rem",
  //     lineHeight: "1.8rem",
  //   },
  //   body2: {
  //     fontSize: "0.833rem",
  //   },
  //   button: {
  //     fontSize: "0.833rem",
  //   },
   }
});

export default theme;
