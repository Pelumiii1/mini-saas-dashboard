"use client";

import { useEffect, useState } from "react";
import Metric from "./metric";
import Chart from "./chart";
import { ClipLoader } from "react-spinners";

type DashboardData = {
  metrics: {
    monthlyUsers: number;
    revenue: number;
    churn: number;
  };
  chartData: { name: string; value: number }[];
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/dashboard");
      const json = await res.json();
      console.log(json);
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Metric label="Monthly Users" value={data.metrics.monthlyUsers} />
        <Metric label="Revenue" value={`$${data.metrics.revenue}`} />
        <Metric label="Churn" value={`${data.metrics.churn}%`} />
      </div>
      <Chart data={data.chartData} />
    </div>
  );
}
