import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement, // Register the Bar element
  BarController // Register the Bar controller
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement, // Register the Bar element
  BarController // Register the Bar controller
);
const options={
  indexAxis:'y'
}
export default function BarChart() {
  const Grapghdata={
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Startday","Sunday"],
    datasets:[
      {
        label:"DataSet1",
        data: [323,-137,-113,-146,220,360,122,],
        backgroundColor:"yellow",
  },  {
    label:"DataSet2",
    data: [-233,365,443,-226,-150,-400,372,],
    backgroundColor:"Aqua"
},
{
  type:'line',
  label:"DataSet3",
  data: [173,165,-240,-326,250,-100,72,],
  backgroundColor:"red",
  borderColor: "orange",
  borderWidth:7
}
    ]
  }

  const Grapghdata2={
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Startday","Sunday"],
    datasets:[
      {
        label:"DataSet1",
        data: [23,37,13,46,20,60,12,],
        backgroundColor:["red","yellow","green","blue","orange","aqua","purple"],
  },
    ]
  }
  return (
    <div>
      <h1>BarCharts</h1>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
          <h4>Multiple DataSets  (BarChart-in-lineChart)</h4>
         <Bar data={Grapghdata}/>
          </div>
          <div className="col col-lg-6">
          <h4>Horizantal bar</h4>
         <Bar data={Grapghdata2} options={options}/>
          </div>
        </div>
      </div>
    </div>
  )
}
