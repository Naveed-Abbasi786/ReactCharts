import React from "react";
import { Pie } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,

} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function PieChart() {
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
        data: [183,37,-53,316,320,60,-242,],
        backgroundColor:["green","blue","red","yellow","purple","aqua","yellow"],
        borderColor:'red'
      },
      {
        label: "DataSet2",
        data: [13,337,153,146,220,160,312,],
        backgroundColor:["green","blue","red","yellow","purple","aqua","yellow"],
        borderColor:'yellow'
      },
      {
        label: "DataSet3",
        data: [323,37,-53,-146,20, 360,400,],
        backgroundColor:["green","blue","red","yellow","purple","aqua","yellow"],
        borderColor:'green'
      },
    ],
  };

  return (
    <>
      <h1>Pie&Radar</h1>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <h1>Pie Charts </h1>
            <Pie data={GraphData} />
          </div>
          <div className="col col-lg-6">
            <h1>Radar Chart</h1>
            <Radar data={GraphData2}/>        
          </div>
        </div>
      </div>
    </>
  );
}
