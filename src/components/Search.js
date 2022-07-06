import React, { useState } from "react";
import classes from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";

const Search = (props) => {
  let value;
  const API_KEY = "2a95407562161c907213d3c692c06e9a";
  const dispatch = useDispatch();
  let data;

  const inputHandler = (e) => {
    value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "SET_LOADING", isLoading: true });

    const func = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}&mode=json&units=metric`
        );
        data = await response.data;

        const city = data.name;

        const response1 = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric`
        );
        const list = await response1.data.list;
        const graphLabels = list.map((listItem) => {
          return listItem.dt_txt.slice(11, 16);
        });
        const graphData = list.map((listItem) => {
          return listItem.main.temp;
        });
        const data1 = {
          labels: graphLabels,
          datasets: [
            {
              label: "TEMPERATURE",
              data: graphData,
              fill: false,
              borderColor: "#742774"
            },
          ],
        };

        dispatch({
          type: "SET_WEATHER",
          weather: data.weather[0].description,
          location: data.name,
          temperature: data.main.temp,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          graph: data1,
        });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "SET_ERROR", error: err.message });
      }
    };

    dispatch({ type: "SET_LOADING", isLoading: false });

    if (value !== undefined) {
      func();
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input className={classes.input} onChange={inputHandler}></input>
      <button type="submit" className={classes.icon}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
