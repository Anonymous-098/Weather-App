import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart,Line } from 'react-chartjs-2'
import classes from "./Graph1.module.css";
ChartJS.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Graph1() {
  return (
    <div className={classes.graph1}>
      <Line data={data} />
    </div>
  );
}
