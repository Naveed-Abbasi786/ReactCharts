import React from 'react'
import { PolarArea ,Doughnut} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
} from "chart.js";

ChartJS.register(
ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);
export default function PoloAreaChart() {
    const GraphData = {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Startday",
          "Sunday",
        ],
        datasets: [
          {
            label: "DataSet1",
            data: [23,37,13,46,20,60,12,],
            backgroundColor:["red","yellow","green","blue","orange","aqua","purple"],
          },
        ],
      };
      const GraphData2 = {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Startday",
          "Sunday",
        ],
        datasets: [
          {
            label: "DataSet1",
            data: [23,37,13,46,20,60,12,],
            backgroundColor:["red","yellow","green","blue","orange","aqua","purple"],
          },
        ],
      };
    
  return (
    <>
    <h1>PoloaArea&Doughnut</h1>
    <div className="container">
      <div className="row">
        <div className="col col-lg-6">
          <h4>PoloArea Charts </h4>
          <PolarArea data={GraphData} />
        </div>
        <div className="col col-lg-6">
          <h4>Doughnut Chart</h4>
          <Doughnut data={GraphData2}/>        
        </div>
      </div>
    </div>
  </>
  )
}
