import Typography from "@mui/material/Typography";
import SectionWrapper from "../src/components/atoms/wrapperElements/sectionWrapper"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroPicture from "../public/404.svg";
import Link from "next/link";

export default function NotFoundPage(){
  return (
    <>
    <SectionWrapper fullViewHeight>
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ minHeight: "100%", }}
    >
      <Grid item sx={{ pt: 5}}>
        <Box sx={{ p: 1 }}>
          <Box>
            <Image
              src={HeroPicture}
              width={500}
              height={500}
              layout="responsive"
              alt="404 - Diese Seite exestiert nicht"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Link href="/">

            <Typography variant="h2" gutterBottom>
              Go Back Home
            </Typography>

        </Link>
      </Grid>
    </Grid>
    </SectionWrapper>
    </>
  )
}
