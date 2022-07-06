import classes from "./Weather.module.css";
import { useSelector, useDispatch } from "react-redux";

const Weather = (props) => {
  const dispatch = useDispatch();
  const temperature = useSelector((state) => state.temperature);
  const location = useSelector((state) => state.location);
  const weather = useSelector((state) => state.weather);
  const icon = useSelector((state) => state.icon);
  const humidity = useSelector((state) => state.humidity);
  const wind = useSelector((state) => state.wind);

  return (
    <div className={classes.weatherContainer}>
      <div className={classes.weather}>
        <div className={classes.content}>
          <div className={classes.gridBox}>
            <div className={classes.item1}>
              <span className={classes.temp}>{temperature} </span>
              <span className={classes.span}>C</span>
            </div>
            <div className={classes.item2}>
              <div>
                <img src={icon}></img>
                <p>{weather}</p>
              </div>
            </div>
            <div className={classes.item3}>
              <div>
                <p>Humidity : {humidity} %</p>
                <p>Wind : {wind} m/s</p>
              </div>
            </div>
            <div className={classes.item4}>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

// https://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=2a95407562161c907213d3c692c06e9a
// https://api.openweathermap.org/data/2.5/weather?q=mysore&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric

// api.openweathermap.org/data/2.5/forecast?q=mysore&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric