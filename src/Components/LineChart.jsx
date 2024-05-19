import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const option = {
  indexAxis: "y",  
  // (X) Axix by defualt (y) Axix Customize
};

export default function LineChart() {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Startday","Sunday"],
        datasets: [
          {
            label: "DataSet1",
            data: [22,10,33,16,50,30,0,],
            backgroundColor:"yellow",
            borderColor: "red",
            borderWidth: 4,
          },
          {
            label: "DataSet2",
            data: [42,20,13,26,30,7,40,],
            backgroundColor:"Purple",
            borderColor: "yellow",
            borderWidth:3
          },
          {
            label: "DataSet3",
            data: [12,15,23,16,30,17,40,],
            backgroundColor:"red",
            borderColor: "blue",
            borderWidth:2
          },
        ],
      };
      const GraphData={
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Startday","Sunday"],
        datasets:[
          {
            label:"DataSet1",
            data: [23,37,13,46,20,60,12,],
            backgroundColor:'green',
            borderColor: "aqua",
            borderWidth:2
      },
        ]
      }
  return (
    <div>
      <h1>LineCharts</h1>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6" style={{cursor:'pointer'}}>
            <h4>Multiple DataSets (Vartical bar)</h4>
          <Line data={data} />
          </div>
          <div className="col col-lg-6" style={{cursor:'pointer'}}>
          <h4>Horizantal bar</h4>
          <Line data={GraphData}  options={option} />
          </div>
        </div>
      </div>
    </div>
  );
}
