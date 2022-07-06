import React, { useState } from "react";
import { WiCloud } from "react-icons/wi";
import classes from "./App.module.css";
import Weather from "./components/Weather";
import Search from "./components/Search";

const App = () => {

  return (
    <>
      <div className={classes.title}>
        <Search />
        <WiCloud size={40} />
        <h1>Weather App</h1>
      </div>
      <Weather />
    </>
  );
};

export default App;
