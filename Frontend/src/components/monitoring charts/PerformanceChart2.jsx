// PerformanceChart.jsx
import React, { useEffect, useState } from "react";
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
import { useGetFarmsQuery } from "../../store/api/farmApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const calculateSpend = (farmList) => {
  let totalSpend = [];
  for (let i = 0; i < farmList.length; i++) {
    if (!farmList[i]) continue;
    if (!farmList[i]?.finances) continue;
    if (!farmList[i]?.finances?.transactions) continue;

    for (let j = 0; j < farmList[i]?.finances?.transactions.length; j++) {
      if (!farmList[i]?.finances?.transactions[j]) continue;
      if (!farmList[i]?.finances?.transactions[j]?.amount) continue;
      if (farmList[i]?.finances?.transactions[j]?.type == "Expense") continue;
      totalSpend.push(farmList[i]?.finances?.transactions[j]?.amount);
    }
  }
  return totalSpend;
};

const PerformanceChart2 = () => {
  const [totalSpend, setTotalSpend] = useState(0);
  const [spentList, setSpentList] = useState([]);
  const { data: farmList, isLoading, error } = useGetFarmsQuery();

  

  useEffect(() => {
    if (!isLoading && !error && farmList) {
      setTotalSpend(calculateSpend(farmList));
      setSpentList(calculateSpend(farmList));
    }
  }, [farmList]);

 

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Expences",
        data: spentList, // slightly improved values
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Expences Tracking " },
    },
  };

  return <Line data={data} options={options} />;
};

export default PerformanceChart2;
