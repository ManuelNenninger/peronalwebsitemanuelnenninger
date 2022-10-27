import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

export default function SvgWave({children}){
  //Die 300 height sind der Abstand zwischen den Sections jeweils
  return (
    <>
    <Box>
     <SvgIcon
       sx={{ height: 300, width: "100%", display: "block" }}
       xmlns="http://www.w3.org/2000/svg"
       preserveAspectRatio="none"
       viewBox="0 0 1440 320"
     >
       {children}
     </SvgIcon>
   </Box>
    </>
  )
}

//So sieht das als Beispiel dann aus
// <SvgWave>
//         <path
//           fill="#DCB191"
//           fillOpacity="1"
//           d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
//         ></path>
//       </SvgWave>
