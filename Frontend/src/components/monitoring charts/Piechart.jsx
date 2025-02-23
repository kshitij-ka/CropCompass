import React, { useState } from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const [series, setSeries] = useState([35.1, 23.5, 2.4, 5.4]);

  const chartOptions = {
    series: series,
    labels: ["Fertilizers", "Pestisides", "Manner", "Urea"],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      type: "donut",
      height: 320,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "k";
              },
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="bg-white md:p-6 block max-w-sm p-6 bg-no-repeat bg-center bg-cover border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-4 ">
        Farm Info
      </h5>
      <Chart options={chartOptions} series={series} type="donut" height={320} />
    </div>
  );
};

export default Piechart;
