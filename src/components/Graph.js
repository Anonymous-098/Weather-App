import classes from "./Graph.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Line } from "react-chartjs-2";
ChartJS.register(...registerables);

const Graph = (props) => {
  const dispatch = useDispatch();
  let firstValue;
  let array = [];
  const city = useSelector((state) => state.location);
  const graph = useSelector((state) => state.graph);

  return (
    <div>
      <div className={classes.graph}>
        <Line data={graph} />
      </div>
    </div>
  );
};

export default Graph;
