"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartProps = {
  data: { name: string; value: number }[];
};

export default function Chart({ data }: ChartProps) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-4">
        Monthly Performance
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
