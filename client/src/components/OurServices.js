import React, { useEffect } from "react";
import Card from "./Card";

import M from "materialize-css/dist/js/materialize.min.js";


const OurServices = () => {
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  return (
    <div>
      <div class="carousel">
        <a class="carousel-item" href="#one!">
          <Card />
        </a>
        <a class="carousel-item" href="#two!">
          <Card />
        </a>
        <a class="carousel-item" href="#three!">
          <Card />
        </a>
        <a class="carousel-item" href="#four!">
          <Card />
        </a>
        <a class="carousel-item" href="#five!">
          <Card />
        </a>
      </div>
    </div>
  );
};
export default OurServices;
