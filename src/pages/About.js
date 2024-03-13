import { Grid, Typography } from "@mui/material";
import React from "react";
import SideImage from "../assets/SideImage.png";

const About = () => {
  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        <Grid
          item
          container
          xs={6}
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "100px",
            paddingTop: "50px",
            paddingRight: "50px",
          }}
        >
          <Grid item>
            <Typography variant="h4">Our Story</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </Typography>
          </Grid>
          <Grid item sx={{ paddingTop: "10px" }}>
            <Typography variant="body2">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ paddingTop: "50px" }} xs={6}>
          <img src={SideImage} alt="Side Image" height="500px" width="500px" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
