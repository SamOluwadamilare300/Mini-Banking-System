import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import React from 'react';
import { Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend); // Registering necessary components

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ['Bank 1', 'Bank 2', 'Bank 3'], // `labels`, not `label`
    datasets: [
      {
        label: 'Banks',
        data: [1250, 250, 370],
        backgroundColor: ['#0747b6', '#2275d8', '#2f91fa']
      }
    ]
  };

  return (
    <Doughnut data={data}
    options={{
        cutout: '60%',
        plugins:{
            legend: {
                display: false
            }
        }
    }} /> // Correctly passing `data`
  );
};

export default DoughnutChart;
