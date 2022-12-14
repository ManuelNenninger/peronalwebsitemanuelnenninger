import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Footer from "./components/organisms/footer";
import dynamic from "next/dynamic";
import AppBar from "././components/organisms/appbar";
//AbbBar muss aufgrund eines Bugs Client Side gerenderd werden. Nicht pre-rendered.
// const AppBar = dynamic(
//     () => import('./organisms/appbar'),
//     { ssr: false }
// )
export default function Layout(props) {
  const { footer = {} } = props;
  const theme = useTheme();

  return (
    <>
      <Box
        id="main_BackgroundColor"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Box
          id="main_Frame"
          sx={{
            maxWidth: "1680px",
            mx: "auto",
            //px: 6,
          }}
        >
          <AppBar content={footer}>
            <main>{props.children}</main>
            <Footer content={footer} />
          </AppBar>
        </Box>
      </Box>
    </>
  );
}
