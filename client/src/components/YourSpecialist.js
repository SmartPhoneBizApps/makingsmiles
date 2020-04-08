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
    maxWidth: 800
  },
  image: {
    width: 300,
    height: 600
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function YourSpecialist() {
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
                src="https://www.makingsmiles.co.uk/wp-content/uploads/2019/11/aneel-2-235x300.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <p>
            Dr Aneel Jaisinghani is Consultant in Orthodontics at Stoke
            Mandeville Hospital in Aylesbury and Amersham Hospital. He also
            works as Specialist Orthodontist in High Wycombe, Ickenham and
            Hounslow.
          </p>
          <p>
            His special interests are both in adult and children’s orthodontics
            with an emphasis on complex multidisciplinary treatments as well as
            cosmetic treatments in adults. He works closely with other
            specialists in children’s dentistry, maxillofacial surgery. Aneel
            qualified with honours as a dentist in 1996. He was awarded Master
            of Science Degree in Orthodontics from University of London in 2005
            and awarded Membership in Orthodontics in 2005 and Fellowship in
            Orthodontics of Royal College of Surgeons of Edinburgh in 2008.
          </p>
          <p>
            He is on the Specialist list for Orthodontics of the General Dental
            Council. He has published scientific articles in Orthodontics. Aneel
            enjoys treatment-planning patients requiring mutlidisciplinary care
            centered around orthodontics, which means he works closely with with
            his periodontal, aesthics and oral surgery specialists to ensure his
            patients acquire the highest standard of care. This experience was
            widened to include the use Invisalign (clear aligners) and fricton
            free brackets.
          </p>

          <p>
            Away from Practice Aneel enjoys Badminton, Cricket, is married to
            Megha and they have three lovely children.
          </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default YourSpecialist;
