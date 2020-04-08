import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "materialize-css/dist/css/materialize.min.css";
//import Paper from "@material-ui/core/Paper";

const HW_Central = {
  Street: "7a Queen Victoria Road (1st Floor)",
  City: "High Wycombe",
  PostCode: "HP11 1BA",
  Country: "United Kingdom",
  Email: "info@makingsmiles.co.uk",
  Phone: "01494 442021",
  OpeningHours: {
    Monday: "08:30 to 18:00",
    Tuesday: "08:30 to 18:00",
    Wednesday: "08:30 to 19:00",
    Thursday: "08:30 to 19:00",
    Friday: "08:30 to 17:00",
    Saturday: "08:30 to 13:00 (First Saturday of the month)",
    Note:
      "We are closed for lunch between 13:00 to 14:00 hours. For more information please call 01494 442021"
  }
};

const HW_West = {
  Street: "191 Desborough Avenue (Ground Floor)",
  City: "High Wycombe",
  PostCode: "HP11 2ST",
  Country: "United Kingdom",
  Email: "info@makingsmiles.co.uk",
  Phone: "01494 436839",
  OpeningHours: {
    Monday: "09:00 to 18:00",
    Tuesday: "09:00 to 18:00",
    Wednesday: "09:00 to 20:00",
    Thursday: "09:00 to 18:00",
    Friday: "09:00 to 18:00",
    Saturday: "09:30 to 13:00 (Third Saturday of the month)",
    Note:
      "We are closed for lunch between 13:00 to 14:00 hours. For more information please call 01494 436839"
  }
};

const HW_Amersham = {
  Street: "Amersham Health Center, 1st Floor, Chiltern Avenue",
  City: "Amersham",
  PostCode: "HP6 5AY",
  Country: "United Kingdom",
  Email: "amersham@makingsmiles.co.uk",
  Phone: "01494 726886",
  Quote: "You shouldn’t wait! Contact us and scheduled your visit",
  OpeningHours: {
    Monday: "09:00 to 18:00",
    Tuesday: "09:00 to 18:00",
    Wednesday: "08:30 to 19:00",
    Thursday: "09:00 to 18:00",
    Friday: "09:00 to 18:00",
    Saturday: "09:30 to 13:00 (Third Saturday of the month)",
    Note:
      "We are closed for lunch between 13:00 to 14:00 hours. For more information please call 01494 726886"
  }
};



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

function STabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="High Wycombe Central" {...a11yProps(0)} />
          <Tab label="High Wycombe West" {...a11yProps(1)} />
          <Tab label="Amersham Health Center" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Meet out team at High Wycombe Central
        <div class="row">
          <div class="card col s12 m6 l3 teal lighten-4">
            <h6>Natalie Ackuaku </h6>
            <p>Specialist Orthodontist </p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-3">
            <h6>Mariana Holdsworth</h6>
            <p>Specialist Orthodontist</p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-2">
            <h6>Irina Coward </h6>
            <p>Therapist </p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-1">
            <h6>Nishi Soni </h6>
            <p>Therapist </p>
          </div>
        </div>
        <div class="row">
          <div class="card col s12 m6 l3 teal lighten-1">
            <h6>Samantha Harrison </h6>
            <p>Therapist </p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-2">
            <h6>Linda Price</h6>
            <p>Orthodontic Nurse </p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-3">
            <h6>Sarah Smith</h6>
            <p>Orthodontic Nurse</p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-4">
            <h6>Amareen Ali </h6>
            <p>Orthodontic Nurse</p>
          </div>
        </div>
        <div class="row">
          <div class="card col s12 m6 l3 teal lighten-3">
            <h6>Amber Khalid </h6>
            <p>Orthodontic Nurse </p>
          </div>
          <div class="card col s12 m6 l3 teal lighten-2">
            <h6>Nargis Zabeti</h6>
            <p>Orthodontic Nurse</p>
          </div>
        </div>

        <div class="teal lighten-3 white-text">
        <div class="card teal lighten-1">
          <div class="row">
            <div class="col s6">
              <h5>Address</h5>
              {HW_Central.Street}
              <br />
              {HW_Central.City}
              <br />
              {HW_Central.PostCode}
              <br />
              {HW_Central.Country}
              <br />
              {HW_Central.Email}
              <br />
              {HW_Central.Phone}
            </div>
            <div class="col s6">
              <h5>Opening Hours</h5>
              Monday : {HW_Central.OpeningHours.Monday}
              <br />
              Tuesday : {HW_Central.OpeningHours.Tuesday}
              <br />
              Wednesday : {HW_Central.OpeningHours.Wednesday}
              <br />
              Thursday : {HW_Central.OpeningHours.Thursday}
              <br />
              Friday : {HW_Central.OpeningHours.Friday}
              <br />
              Saturday : {HW_Central.OpeningHours.Saturday}
              <br />
              Note : {HW_Central.OpeningHours.Note}
            </div>
          </div>
        </div>
      </div>






      </TabPanel>

      <TabPanel value={value} index={1}>
      Meet out team at High Wycombe West
        <div class="row">
          <div class="card col s12 m6 l3 blue darken-1">
            <h6>Natalie Ackuaku</h6>
            <p>Specialist Orthodontist</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-2">
            <h6>Mariana Holdsworth</h6>
            <p>Specialist Orthodontist</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-3">
            <h6>Hannal Lal</h6>
            <p>Orthodontic Nurse</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-4">
            <h6>Maddison Clare</h6>
            <p>Receptionist</p>
          </div>
        </div>

        <div class="blue darken-4 white-text">
        <div class="card blue darken-4">
          <div class="row">
            <div class="col s6">
              <h5>Address</h5>
              {HW_West.Street}
              <br />
              {HW_West.City}
              <br />
              {HW_West.PostCode}
              <br />
              {HW_West.Country}
              <br />
              {HW_West.Email}
              <br />
              {HW_West.Phone}
            </div>
            <div class="col s6">
              <h5>Opening Hours</h5>
              Monday : {HW_West.OpeningHours.Monday}
              <br />
              Tuesday : {HW_West.OpeningHours.Tuesday}
              <br />
              Wednesday : {HW_West.OpeningHours.Wednesday}
              <br />
              Thursday : {HW_West.OpeningHours.Thursday}
              <br />
              Friday : {HW_West.OpeningHours.Friday}
              <br />
              Saturday : {HW_West.OpeningHours.Saturday}
              <br />
              Note : {HW_West.OpeningHours.Note}
            </div>
          </div>
        </div>
      </div>



      </TabPanel>
      <TabPanel value={value} index={2}>
      Meet out team at Amersham Health Center
        <div class="row">
          <div class="card col s12 m6 l3 blue darken-4">
            <h6>Nicola Worthington</h6>
            <p>Specialist Orthodontist</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-3">
            <h6>Meera Shah</h6>
            <p>Specialist Orthodontist</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-2">
            <h6>Nishi Soni</h6>
            <p>OTherapist</p>
          </div>
          <div class="card col s12 m6 l3 blue darken-1">
            <h6>Catherine Cozens</h6>
            <p>Orthodontic Nurse</p>
          </div>
        </div>
        <div class="row">
          <div class="card col s12 m6 l3 blue darken-2">
            <h6>Zara Farooq</h6>
            <p>Orthodontic Nurse </p>
          </div>
          
          <div class="card col s12 m6 l3 blue darken-3">
            <h6>Vania Patricia</h6>
            <p>Orthodontic Nurse</p>
          </div>
          
        </div>       

        <div class="blue darken-4 white-text">
        <div class="card blue darken-4">
          <div class="row">
            <div class="col s6">
              <h5>Address</h5>
              {HW_Amersham.Street}
              <br />
              {HW_Amersham.City}
              <br />
              {HW_Amersham.PostCode}
              <br />
              {HW_Amersham.Country}
              <br />
              {HW_Amersham.Email}
              <br />
              {HW_Amersham.Phone}
            </div>
            <div class="col s6">
              <h5>Opening Hours</h5>
              Monday : {HW_Amersham.OpeningHours.Monday}
              <br />
              Tuesday : {HW_Amersham.OpeningHours.Tuesday}
              <br />
              Wednesday : {HW_Amersham.OpeningHours.Wednesday}
              <br />
              Thursday : {HW_Amersham.OpeningHours.Thursday}
              <br />
              Friday : {HW_Amersham.OpeningHours.Friday}
              <br />
              Saturday : {HW_Amersham.OpeningHours.Saturday}
              <br />
              Note : {HW_Amersham.OpeningHours.Note}
            </div>
          </div>
        </div>
      </div>
      </TabPanel>
    </div>
  );
}
export default STabs;
