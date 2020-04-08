import React from "react";

const AboutUs = () => {
  const address = {
    Street: "47, Lower Cippenham Lane",
    City: "Slough",
    Country: "UK"
  };
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Address</span>
            <p>Street: {address.Street}</p>
            <p>Street: {address.City}</p>
            <p>Street: {address.Country}</p>
          </div>
          <div class="card-action">
            <a href="/ContactUs">Contact Us</a>
            <a href="/MeetOurTeam">Meet Our Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
