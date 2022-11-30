import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ActionButton from "../buttons/actionButton"
import EmailSubscribtion from "./eMailSubscribtionForm";
import Grid from '@mui/material/Grid';
import ContactForm from "./contactform";

export default function DialogOrder({open, handleClose, order }){
  const theme = useTheme();


  return(
    <>
    <Dialog
      open={open}
      //TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
    <Box sx={{ backgroundColor: theme.palette.primary.main, p:4 }}>
    <DialogTitle color="text.primary">{"Say Hello"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <Typography variant="body1" color="text.primary">
          Hinterlass mir deine Mail und schreibe mir kurz wie ich dich unterstützen kann.
        </Typography>
        <Typography variant="body1" color="text.primary" >
          Bist Du interessiert an einer Blog Website? Einem eCommerce Shop oder willst mir einfach nur Hallo sagen?
        </Typography>
        <Typography variant="body1" color="text.primary" >
          Ich freue mich über jede Nachricht :)
        </Typography>
      </DialogContentText>
    </DialogContent>
      <DialogActions>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <Grid item sx={{width: "100%"}}>
        <ContactForm />
      </Grid>
      </Grid>
      </DialogActions>
      </Box>
    </Dialog>
    </>
  )
}
