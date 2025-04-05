import { useEffect, useState } from "react";
import { useGetFarmsQuery } from "../store/api/farmApi";

const calculateSpend = (farmList) => {
  let totalSpend = 0;
  for (let i = 0; i < farmList.length; i++) {
    if (!farmList[i]) continue;
    if (!farmList[i]?.finances) continue;
    if (!farmList[i]?.finances?.totalExpenses) continue;
    totalSpend += farmList[i]?.finances?.totalExpenses;
  }
  return totalSpend;
};

const TotalSpent = () => {
  const [totalSpend, setTotalSpend] = useState(0);
  const { data: farmList, isLoading, error } = useGetFarmsQuery();

  useEffect(() => {
    if (!isLoading && !error && farmList) {
      setTotalSpend(calculateSpend(farmList));
    }
  }, [farmList]);

 
  return (
    <div className="h-full">
      <a
        href="#"
        className="h-full block max-w-sm p-6 bg-no-repeat bg-center bg-cover border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {totalSpend && totalSpend} ₹
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          This is the total cost which you spent on this farm
        </p>
      </a>
    </div>
  );
};

export default TotalSpent;
