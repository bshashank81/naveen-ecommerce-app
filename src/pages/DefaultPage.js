import { Grid } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "../components/molecules/Tabs";
import HomePageContent from "./HomePageContent";
import About from "./About";

const DefaultPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Home Page", value: "1", content: <HomePageContent /> },
    { label: "About", value: "2", content: <About /> },
  ];

  return (
    <Grid container direction="column">
      <Grid item>
        <Tabs tabs={tabs} />
      </Grid>
    </Grid>
  );
};

export default DefaultPage;
