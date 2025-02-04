import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { generateData } from '@/lib/generateData';
const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      { name: 'Jan', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Feb', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Mar', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Apr', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'May', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Jun', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Jul', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Aug', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Sep', data: generateData(30, { min: -30, max: 55 }) },
      { name:'Oct', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Nov', data: generateData(30, { min: -30, max: 55 }) },
      { name: 'Dec', data: generateData(30, { min: -30, max: 55 }) },
    ],
    options: {
      chart: {
        height: 300,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              { from: -30, to: 5, name: 'low', color: '#00A100',foreColor:"#FFFFFF" },
              { from: 6, to: 20, name: 'medium', color: '#128FD9' ,foreColor:"#FFFFFF"},
              { from: 21, to: 45, name: 'high', color: '#FFB200' ,foreColor:"#FFFFFF"},
              { from: 46, to: 55, name: 'extreme', color: '#FF0000' ,foreColor:"#FFFFFF"},
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      title: {
        text: 'HeatMap Chart with Color Range',
        style:{
            color:"white"
        }
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
    </div>
  );
};

export default ApexChart;
