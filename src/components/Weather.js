import classes from "./Weather.module.css";
import { useSelector, useDispatch } from "react-redux";

const Weather = (props) => {
  const dispatch = useDispatch();
  const temperature = useSelector((state) => state.temperature);
  const weather = useSelector((state) => state.weather);

  return (
    <div className={classes.weatherContainer}>
      <div className={classes.weather}>
        <div className={classes.content}>
          <div className={classes.gridBox}>
            <div className={classes.item1}>{weather}</div>
            <div className={classes.item2}>{temperature}</div>
            <div className={classes.item3}>3</div>
            <div className={classes.item4}>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

// https://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=2a95407562161c907213d3c692c06e9a
// https://api.openweathermap.org/data/2.5/weather?q=mysore&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric
