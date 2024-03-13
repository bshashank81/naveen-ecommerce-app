import React from "react";
import { Grid, Typography } from "@mui/material";

const HomePageContent = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{ paddingLeft: "50px", paddingTop: "50px" }}
    >
      <Grid item>
        <iframe
          width="900"
          height="550"
          src="https://www.youtube.com/embed/i6ruGmiuUIg?si=IPqldRSPoOYSyQul"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h5" color="#C45500">
            Only few items, Hurry Up!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="#565959">
            We provide dresses at a very discounted prices
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePageContent;
