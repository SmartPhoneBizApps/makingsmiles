import React, { Fragment } from "react";

//import OurLocations from "./OurLocations";
import ImageGridList from "./ImageGridList";
//import YourSpecialist from "./YourSpecialist";
import Aneel from "./Aneel";
import Download from "./Download";
import STabs from "./Tabs";
import Intro from "./Intro";

const Home = () => {
  return (
    <Fragment>
      <div>
        <h4>About Us</h4>
        <div className="container">
          <Intro />
          <br />
          <Aneel />
          <br />
          <h4>Our Services</h4>
          <div className="container">
            <ImageGridList />
          </div>

          <h4>Download Forms</h4>
          <Download />
          <br />
          <h4>Meet our Team</h4>
          <div className="hide-on-small-only card col s6 m3 l3">
            <img
              class="materialboxed"
              width="1010"
              src="https://www.makingsmiles.co.uk/wp-content/uploads/2019/11/Team-2.png"
            ></img>
          </div>
          <br />
          <STabs />
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
