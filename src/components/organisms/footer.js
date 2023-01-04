import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import Divider from "@mui/material/Divider";
import Link from "next/link";
// import { useAppContext } from "../../appContext";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper";

export default function Footer({ content = {} }) {
  // let value = useAppContext();
  let {
    brandname = "",
    footerrowbuilder = [
      {
        metaTitle: "Service",
        linkbuilder: [
          { linkname: "Versand", url: "/versand" },
          { linkname: "FAQ", url: "/faq" },
        ],
      },
      {
        metaTitle: "Rechtliches",
        linkbuilder: [
          { linkname: "Impressum", url: "/impressum" },
          { linkname: "Darenschutzerklärung", url: "/datenschutz" },
        ],
      },
    ],
    footersocial = {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      twitter: "https://twitter.com/",
    },
  } = content;

  const columnsNumber =
    footersocial !== null
      ? footerrowbuilder.length + 1
      : footerrowbuilder.length;

  const SocialGrid = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent={{ md: "flex-start", xs: "space-around" }}
          alignItems="flex-start"
          sx={{}}
        >
          {footersocial?.instagram && (
            <Grid item>
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                href={footersocial.instagram}
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          )}
          {footersocial?.facebook && (
            <Grid item>
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                href={footersocial.facebook}
              >
                <FacebookRoundedIcon />
              </IconButton>
            </Grid>
          )}
          {footersocial?.twitter && (
            <Grid item>
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                href={footersocial.twitter}
              >
                <TwitterIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </>
    );
  };

  const GridSocial = () => {
    return (
      <>
        <Grid
          item
          xs={12}
          md={parseInt(12 / columnsNumber)}
          sx={{ px: 3, py: 5 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={1}
            sx={{}}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Socials
              </Typography>
            </Grid>
            <SocialGrid />
          </Grid>
        </Grid>
      </>
    );
  };
  const GridLinks = () => {
    return (
      <>
        {footerrowbuilder.map(function (obj, index) {
          return (
            <>
              <Grid
                item
                xs={12}
                md={parseInt(12 / columnsNumber)}
                sx={{ borderRight: { sm: 0, md: 1 }, px: 1, py: 5 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems={{ xs: "center", md: "flex-start" }}
                  spacing={1}
                  sx={{ mr: 5 }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                      {obj.metaTitle}
                    </Typography>
                  </Grid>
                  {obj.linkbuilder.map(function (linkObj, linkIndex) {
                    return (
                      <>
                        <Grid item key={linkObj.linkname + linkIndex}>
                          <Link href={linkObj.url}>
                            <Typography variant="subtitle1" gutterBottom>
                              {linkObj.linkname}
                            </Typography>
                          </Link>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </>
          );
        })}
      </>
    );
  };

  const InfoGrid = (props) => {
    return (
      <>
        {" "}
        <Grid
          container
          direction="row"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={0}
          sx={{
            float: "right",
            "& > div": {
              pr: 5,
              //borderRight: 1,
            },
          }}
        >
          <GridLinks />
          {footersocial && <GridSocial />}
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper footer>
      <Divider sx={{ borderColor: "borderColor.dark" }} />
      <Grid
        container
        direction="row"
        justifyContent={{ xs: "center", md: "flex-end" }}
        alignItems="flex-start"
        sx={{ pb: 5, pt: 0 }}
      >
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            width: "100%",
            py: 5,
            justifyContent: { xs: "center", md: "none" },
            display: { xs: "flex", md: "block" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {Object.keys(content).length !== 0 ? brandname : "Brandnamé"}
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {Object.keys(content).length !== 0 ? brandname : "Brandnamé"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7.5} sx={{ width: "100%" }}>
          <InfoGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
