import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

export default function CheckboxLabels() {
  const theme = useTheme();

  //https://www.youtube.com/watch?v=ByG--A6jPYk

  const StyledTextField = styled(TextField)({
    mr: 0,
    label: {
      color: theme.palette.secondary.main,
    },
    input: {
      color: theme.palette.secondary.main,
    },
    fieldset: {
      borderColor: theme.palette.secondary.main,
      borderRight: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "& .MuiInputBase-root": {
      height: 60,
    },
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
        borderRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
        borderRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  });

  return (
    <form
      action="https://risao.us18.list-manage.com/subscribe/post?u=b5e1063e4d2a9f361d48469f0&amp;id=8ebe07aea4&amp;f_id=00ff08e7f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: "100%", mx: 2 }}
      >
        <Grid item xs={7} sm={9}>
          <Box sx={{ height: "100%" }}>
            <StyledTextField
              fullWidth
              label="E-Mail"
              variant="outlined"
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              className="required email"
            />
          </Box>
        </Grid>
        <Grid item xs={5} sm={3}>
          {/*Von MailChimp - Beginn*/}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_b5e1063e4d2a9f361d48469f0_8ebe07aea4"
              tabindex="-1"
              value=""
            />
          </div>
          {/*Von MailChimp - Ende*/}
          <Button
            color="secondary"
            fullWidth
            variant="contained"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            sx={{
              my: 0,
              px: 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: 60,
              boxShadow: "none",
              ":hover": {
                backgroundColor: theme.palette.secondary.light,
                boxShadow: "none",
              },
            }}
          >
            Subscribe
          </Button>{" "}
        </Grid>
      </Grid>
    </form>
  );
}
