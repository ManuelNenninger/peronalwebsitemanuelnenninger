import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../lib/sanity";

export default function Imressum({content={}}) {
  const {title="headline", body=[]} = content;

  return(
    <>
      <SectionWrapper fullViewHeight topDistance bottomDistance>
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
          <Grid item sx={{pb: 5}}>
            <Typography variant="h1" sx={{fontWeight: "700"}} gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item>
          {Object.keys(content).length !== 0 ? (<PortableText
            value={body}
            components={ptComponents}
          />) : (<Typography variant="h3" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>)}
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  )
}
