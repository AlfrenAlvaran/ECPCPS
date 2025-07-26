import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { EventContext } from "@/context/EventContext";

const CustomGroupChart = () => {
  const { groupChartData } = useContext(EventContext);
console.log(groupChartData)
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={groupChartData}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="webinars" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        <Bar dataKey="attendees" fill="#22C55E" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomGroupChart;
