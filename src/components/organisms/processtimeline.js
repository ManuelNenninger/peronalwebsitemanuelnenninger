import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem,  { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import * as MuiIcons from '@mui/icons-material'
import Divider from '@mui/material/Divider';

//Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const defaultcontent = [
  {
    mainTitle: "Lorem ipsum",
    iconname: "MailOutline",
    describtion:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
  },
  {
    mainTitle: "Lorem ipsum",
    iconname: "MailOutline",
    describtion:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
  },
  {
    mainTitle: "Lorem ipsum",
    iconname: "MailOutline",
    describtion:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
  },
  {
    mainTitle: "Lorem ipsum",
    iconname: "MailOutline",
    describtion:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
  }
];

export default function CustomizedTimeline({content={}}) {

  const {sectionTitle="Headline Text", processbuilder=[], } = content;
  const TimeLineObject = ({ mainTitle, describtion, iconname="MailOutline", }, index) => {

    const Icon = MuiIcons[iconname];
    return (
      <>
        <TimelineItem key={"Timeline_" + index} color="secondary">
        {/*<TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="subtitle1"
          color="text.primary"
        >
          9:30 am
        </TimelineOppositeContent>*/}
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <Icon sx={{ fontSize: 30 }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 10, px: {sm: 2, md:10}, maxWidth: {sm: "none" ,md:"60vw", lg: "50vw"} }}>
            <Typography variant="h2" component="div">
              {mainTitle}
            </Typography>
            <Divider sx={{borderBottomWidth: "thick", my: 1, borderColor: "secondary.main"}} />
            <Typography>{describtion}</Typography>
          </TimelineContent>
        </TimelineItem>
      </>
    );
  };


  return (
    <SectionWrapper topDistance >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sx={{ pb: 10 }}>
          <Typography variant="h2" component="div" sx={{fontWeight: "700"}}>
            {sectionTitle}
          </Typography>
        </Grid>
        <Grid item sx={{  pl: {xs: 0, sm: 5, md:15} }}>
          <Timeline position="right" sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
          {
            Object.keys(content).length !== 0 ?
            processbuilder.map(function (obj, index) {
              return TimeLineObject(obj, index);
            })
            :
            defaultcontent.map(function (obj, index) {
              return TimeLineObject(obj, index);
            })
          }
          </Timeline>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
