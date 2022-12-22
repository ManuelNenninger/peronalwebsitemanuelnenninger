import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export default function MultilineTextFields() {
  const theme = useTheme();

  // const [value, setValue] = React.useState("Controlled");
  //
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const StyledTextField = styled(TextField)({
    label: {
      color: theme.palette.secondary.main,
    },
    input: {
      color: theme.palette.secondary.main,
    },
    fieldset: {
      borderColor: theme.palette.secondary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  });

  return (
    <Box>
      <form
        action="https://gmail.us17.list-manage.com/subscribe/post?u=400f776a9804292f43ee55016&amp;id=0d0ca739b4&amp;f_id=00c24fe0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              fullWidth
              required
              label="E-Mail"
              variant="standard"
            />{" "}
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="text"
              name="MMERGE1"
              id="mce-MMERGE1"
              fullWidth
              label="Name"
              variant="standard"
            />{" "}
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="text"
              name="MMERGE6"
              id="mce-MMERGE6"
              fullWidth
              label="Nachricht"
              placeholder="Say Hello"
              multiline
              variant="standard"
            />{" "}
          </Grid>{" "}
          <Grid item sx={{ width: "100%" }}>
            {/*Von MailChimp - Beginn*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_400f776a9804292f43ee55016_0d0ca739b4"
                tabindex="-1"
                value=""
              />
            </div>
            {/*Von MailChimp - Ende*/}
            <Button
              color="secondary"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              fullWidth
              type="submit"
              variant="contained"
              startIcon={<MarkunreadIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
