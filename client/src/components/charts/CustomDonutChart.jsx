import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { EventContext } from "@/context/EventContext";
import CustomToolTip from "../CustomToolTip";

const COLORS = ["#4F46E5", "#22C55E", "#10B981", "#F59E0B", "#EF4444"];

const CustomDonutChart = () => {
  const { donutChartData } = useContext(EventContext);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={donutChartData}
          dataKey="attendees"
          nameKey="webinarName"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          labelLine={false}
          label={({name}) => name}
        >
          {donutChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomToolTip />} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          iconSize={10}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomDonutChart;
