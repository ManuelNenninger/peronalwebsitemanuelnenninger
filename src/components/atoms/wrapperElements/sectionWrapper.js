import Box from "@mui/material/Box";
import SvgWrapper from "./svgWaveWrapper"
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export default function SectionWrapper(props){
  const theme = useTheme();
  const {upperWave, lowerWave, footer, secondaryBackgroundColor, topDistance, bottomDistance } = props;
  //Eine Wave schafft 300px distance. Hier kommen 150px padding, sowie 150px Margin des Deviders hinzu
  const distancePadding = "150px";

  return(
    <Box>
      {upperWave ? <SvgWrapper>
      <path
        fill={theme.palette.secondary.main}
        fillOpacity="1"
        d="M0,96L120,128C240,160,480,224,720,245.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
      </path>
      </SvgWrapper> : <Box></Box>}
      <Box
        sx={{
          minHeight: footer ? "none" : "50vh",
          maxWidth: "1680px",
          backgroundColor: secondaryBackgroundColor ? theme.palette.secondary.main : theme.palette.primary.main,
          px: {xs: 3,  md:6},
          pt: topDistance ? distancePadding : 0,
          pb: bottomDistance ? distancePadding: 0,
        }}
      >
      {topDistance ? (<Divider variant="middle" sx={{mb: "150px", backgroundColor: secondaryBackgroundColor ? theme.palette.primary.main : theme.palette.secondary.main}}/>) : <></>}
        {props.children}
      {bottomDistance ? (<Divider variant="middle" sx={{mt: "150px", backgroundColor: secondaryBackgroundColor ? theme.palette.primary.main : theme.palette.secondary.main}}/>) : <></>}
      </Box>
      {lowerWave ? <SvgWrapper>
        <path
          fill={theme.palette.secondary.main}
          fillOpacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
        </path>
      </SvgWrapper> : <Box></Box>}
    </Box>
  )
}
