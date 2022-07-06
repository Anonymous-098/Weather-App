import classes from "./Graph.module.css";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import Tile from "../components/Tile";
ChartJS.register(...registerables);

const Graph = (props) => {
  let firstValue;
  var array = [];

  const graph = useSelector((state) => state.graph);
  const dispatch = useDispatch();
  //   console.log(graph);

  if (graph.labels.length > 5) {
    firstValue = graph.labels[0];

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

    var k = 0;
    var temp = 0;
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < array[k]; j++) {
        gfg[i][j] = graph.datasets[0].data[temp];
        temp++;
      }
      k++;
    }
  }

  return (
    <div>
      <div className={classes.graph}>
        <Line data={graph} />
      </div>
      <Tile />
    </div>
  );
};

export default Graph;
