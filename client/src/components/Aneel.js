import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700
  },
  image: {
    width: 150,
    height: 200
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function Aneel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://www.makingsmiles.co.uk/wp-content/uploads/2019/11/aneel-pic.jpg"
              />
            </ButtonBase>
            <p>BDS MScOrthLond | FOrthRCSEdin | MOrthRCSEdin | FDSRCSEdin | GDC No – 84560</p>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <p>
              Dr. Aneel Jaisinghani is dedicated to providing his patients with the
most beautiful smile together with the best dental protection
available nowadays. Our team heals as if we wanted
to be treated ourselves.
          </p>
 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default Aneel;
