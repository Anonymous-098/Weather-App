import React, { useState } from "react";
import classes from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Search = (props) => {
  let value;
  const API_KEY = "2a95407562161c907213d3c692c06e9a";
  const dispatch = useDispatch();
  let data;
  const graph = useSelector((state) => state.graph);

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

        var firstValue;
        var array = [];

        if (graphLabels.length > 0) {
          firstValue = graphLabels[0];

          if (firstValue === "00:00") {
            array = [8, 8, 8, 8, 8, 0];
          }
          if (firstValue === "03:00") {
            array = [7, 8, 8, 8, 8, 1];
          }
          if (firstValue === "06:00") {
            array = [6, 8, 8, 8, 8, 2];
          }
          if (firstValue === "09:00") {
            array = [5, 8, 8, 8, 8, 3];
          }
          if (firstValue === "12:00") {
            array = [4, 8, 8, 8, 8, 4];
          }
          if (firstValue === "15:00") {
            array = [3, 8, 8, 8, 8, 5];
          }
          if (firstValue === "18:00") {
            array = [2, 8, 8, 8, 8, 6];
          }
          if (firstValue === "21:00") {
            array = [1, 8, 8, 8, 8, 7];
          }

          var gfg = new Array(6);
          var x = 0;

          for (var i = 0; i < gfg.length; i++) {
            gfg[i] = new Array(array[x]);
            x++;
          }
          var gfg1 = new Array(6);
          var x = 0;

          for (var i = 0; i < gfg1.length; i++) {
            gfg1[i] = new Array(array[x]);
            x++;
          }

          var k = 0;
          var temp = 0;
          for (var i = 0; i < 6; i++) {
            for (var j = 0; j < array[k]; j++) {
              gfg[i][j] = graphData[temp];
              gfg1[i][j] = graphLabels[temp];
              temp++;
            }
            k++;
          }

          const data1 = {
            labels: gfg1[0],
            datasets: [
              {
                label: "TEMPERATURE",
                data: gfg[0],
                fill: false,
                borderColor: "#742774",
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
        }
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
