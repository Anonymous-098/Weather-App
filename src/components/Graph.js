import classes from "./Graph.module.css";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart,Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

const Graph = (props) => {
    const dispatch = useDispatch();
  // api.openweathermap.org/data/2.5/forecast?q=mysore&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric
  let firstValue;
  let array = [];
  const city = useSelector((state) => state.location);

  const [graph, setGraph] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const graphDataURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a95407562161c907213d3c692c06e9a&mode=json&units=metric`;

  const callFunc = async () => {
    const response = await axios.get(graphDataURL);
    const list = await response.data.list;
    const graphLabels = list.map((listItem) => {
      return listItem.dt_txt.slice(11, 16);
    });
    const graphData = list.map((listItem) => {
      return listItem.main.temp;
    });
    const data = {
      labels: graphLabels,
      datasets: [
        {
          label: "TEMPERATURE",
          data: graphData,
          fill: false,
          borderColor: "#742774",
        },
      ],
    };
    setGraph(data);
    // dispatch({type:'SET_GRAPH'})
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    callFunc();
  }, [city]);

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {!isLoading && (
        <div className={classes.graph}>
          <Line data={graph} />
        </div>
      )}
    </div>
  );
};

export default Graph;
