import React from "react";

import M from "materialize-css/dist/js/materialize.min.js";


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

const OurLocations = () => {
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  return (
    <div class="carousel carousel-slider ">
      <div class="carousel-fixed-item center">
        <a class="btn waves-effect white grey-text darken-text-2">button</a>
      </div>

      <div class="carousel-item grey lighten-1 white-text" href="#one!">
        <h2>High Wycombe Central</h2>
        <div class="card grey darken-1">
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

      <div class="carousel-item brown lighten-1 white-text" href="#two!">
        <h2>High Wycombe West</h2>
        <div class="card brown darken-1">
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

      <div class="carousel-item orange lighten-1 white-text" href="#three!">
        <h2>Amersham Health Center</h2>
        <div class="card orange darken-1">
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
    </div>
  );
};
export default OurLocations;
