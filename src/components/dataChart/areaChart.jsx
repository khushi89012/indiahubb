import React  from 'react';
import Chart from 'react-google-charts';

// data for the chart
export const data = [
    ["Year", "Sales"],
    ["2013", 35 ],
    ["2014", 40],
    ["2015", 48],
    ["2016", 55],
];
    
  // options for the chart
  export const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" }, beginAtZero: true },
    vAxis: { minValue: 0 , beginAtZero: true },
    chartArea: { width: "50%", height: "70%" },
  };
  
  export function AreaChart() {
    return (
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    );
  }
  // "---------------------------------------------------------for AVG chart ----------------------------------------------------------"