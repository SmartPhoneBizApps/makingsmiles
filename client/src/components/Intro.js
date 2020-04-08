import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const Intro = () => {
  return (
    <div>
      <Typography component="div" variant="body1">
        <Box color="black">
          Since 1997, we are dedicated to providing the highest possible
          standard of orthodontic care. Treatment is provided by consultants and
          specialist orthodontists who lead a team of highly trained orthodontic
          therapists and orthodontic nurses. We provide state-of-art treatment
          in a modern and spacious environment, conveniently situated in heart
          of Buckimghamshire.
        </Box>
      </Typography>
      <br/>
      <Button variant="contained" color="primary">
        Book a Visit
      </Button>
    </div>
  );
};
export default Intro;
