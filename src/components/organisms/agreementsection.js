import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {  useRef } from "react";
import useIsInViewport from "../atoms/visibilityFunction/visibilityFunction"
import Grow from "@mui/material/Grow";
import SvgIcon from "@mui/material/SvgIcon";
// import { useAppContext } from "../../../appContext";
import {PortableText} from '@portabletext/react'
import {ptComponents} from "../../../lib/sanity";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import * as MuiIcons from '@mui/icons-material'
import Divider from '@mui/material/Divider';

export default function BoxSx({content={}}) {

  const theme = useTheme();
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  //console.log("isInViewport1: ", isInViewport);
  // const value = useAppContext();
  // let { agreementGridContent } = value.content.agreementContent;
  let {sectionTitle="", size="", columns=[]} = content;

  const sectionTitleDefault = "Default Title"
  const columnsDefault = [{
    blocks: [
      {iconname: "Biotech", title: "Test Title", body: "Beschreibung: Lorem Ipsum lara.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "},
      {iconname: "BugReport", title: "Test Title", body: "Beschreibung: Lorem Ipsum lara.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "},
      {iconname: "Webhook", title: "Test Title", body: "Beschreibung: Lorem Ipsum lara.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "},
    ],
    sizes: [
      {align: "flex-start", breakpoint: "md", justify: "center", start: 1, width: 3},
      {align: "flex-start", breakpoint: "xs", justify: "center", start: 1, width: 1}
    ]
  }]

  let gridBreakpoints = {};

  const CellGrid = ({ iconname, title, body }, index) => {

    return (
      <>
        <Grid
            xs={gridBreakpoints["xs"] ? gridBreakpoints["xs"] : "none"}
            sm={gridBreakpoints["sm"] ? gridBreakpoints["sm"] : "none"}
            md={gridBreakpoints["md"] ? gridBreakpoints["md"] : "none"}
            lg={gridBreakpoints["lg"] ? gridBreakpoints["lg"] : "none"}
            xl={gridBreakpoints["xl"] ? gridBreakpoints["xl"] : "none"}
            item
            key={"Grid_" + index}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              borderRadius: 0,
              //background: "linear-gradient(rgba(90, 128, 147, 1), rgba(0, 0, 0, 0))",
              //borderImage: "linear-gradient(45deg, rgb(29, 58, 36) 0%, rgba(0, 0, 0, 0) 100%)",
              p: 3,
              pb: 5,
              '& > div': {
              //pb: 1,
              //borderRight: 1,

            },
            // "& :not(:first-of-type)": {
            //   pt: 1,
            // },
            }}
          >
            <Grid item>
              <SvgIcon component={MuiIcons[iconname]}  sx={{fontSize: 60, mb: 2}} />
            </Grid>
            <Grid item>
              <Typography variant="h2" gutterBottom sx={{fontWeight: "400", display: {xs: "none", sm: "block"} }}>
                {title}
              </Typography>
              <Typography variant="h3" gutterBottom sx={{fontWeight: "400",  display: {xs: "block", sm: "none"}}}>
                {title}
              </Typography>
              <Grid item>
              <Divider sx={{
                  borderBottomWidth: "thick",
                  borderColor: "secondary.main",
                  my: 1,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle2" gutterBottom >
              {Object.keys(content).length !== 0 ? (<PortableText
                value={body}
                components={ptComponents}
              />) : "Beschreibung: Lorem Ipsum lara.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "}
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const MainGrid = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          //spacing={10}
          sx={{
            '& > div': {
              px: {sm: 3, md: 3, lg: 5, xl: 8},
              pb: {xs: 5, md: 0},
            },
          }}
        >
          {(Object.keys(content).length !== 0 ? columns : columnsDefault).map(function({blocks, sizes}){
            {/*Hier werden die Grid Breakpoints festgelegt.*/}
            (sizes.map(function(gridOptions){
              {/*Hier werden die Grid Breakpoints in das Object übergeben.*/}
              gridBreakpoints[gridOptions.breakpoint] = parseInt(12/gridOptions.width)
            }))
            return(
              blocks.map(function(ContentObject, sizes, index){
                return(CellGrid(ContentObject, sizes, index))
              })
            )
          })
          }
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper topDistance >
      <Grow
         in={isInViewport}
         style={{ transformOrigin: "0 0 0" }}
         {...(isInViewport ? { timeout: 2000 } : {})}
       >
        <Grid
          ref={ref1}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{}}
        >
          <Grid item sx={{width: "100%", pb: 10}}>
            <Typography align="center" variant="h2" gutterBottom sx={{fontWeight: "700", display: {xs: "none", sm: "block"}}}>
              {Object.keys(content).length !== 0 ? sectionTitle : sectionTitleDefault}
            </Typography>
            <Typography align="center" variant="h3" gutterBottom sx={{fontWeight: "700", display: {xs: "block", sm: "none"}}}>
              {Object.keys(content).length !== 0 ? sectionTitle : sectionTitleDefault}
            </Typography>
          </Grid>
          <Grid item sx={{ }}>
            <MainGrid />
          </Grid>
        </Grid>
      </Grow>
    </SectionWrapper>
  );
}
