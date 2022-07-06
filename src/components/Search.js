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
        dispatch({
            type: "SET_WEATHER",
            weather: data.weather[0].description,
            location: data.name,
            temperature: data.main.temp,
            icon:data.weather[0].icon,
            humidity:data.main.humidity,
            wind:data.wind.speed
          });
      } catch (err) {
        console.log(err.message);
        dispatch({type:'SET_ERROR',error:err.message});
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
