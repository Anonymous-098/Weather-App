import React, { useState } from "react";
import { WiCloud } from "react-icons/wi";
import classes from "./App.module.css";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Graph from "./components/Graph";

const App = () => {
  return (
    <>
      <div className={classes.title}>
        <Search />
        <WiCloud size={40} />
        <h1>Weather App</h1>
      </div>
      <Weather />
      <div className={classes.graphContainer}>
        <div className={classes.graph}>
          <Graph />
        </div>
      </div>
    </>
  );
};

export default App;
