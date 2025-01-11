import { useTheme } from "next-themes";
import React from "react";
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
import { ActivitiesChartData } from "./_chart-data";

export default function ActivitiesChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={ActivitiesChartData}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 10,
        }}
        barGap={12}
      >
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            top: 10,
            right: 10,
            fontSize: 12,
            color: "#4A5568",
            direction: "ltr",
            textTransform: "capitalize",
            transform: "reverse",
          }}
        />
        <CartesianGrid
          vertical={false}
          strokeDasharray="5 5"
          stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
        />
        <XAxis
          dataKey="days"
          tick={{ fontSize: 14, fill: "#718EBF" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fontSize: 14, fill: "#718EBF" }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Bar
          dataKey="withdrawal"
          fill={theme == "dark" ? "var(--color-accent-green)" : "#232323"}
          barSize={10}
          radius={12}
        />
        <Bar
          dataKey="deposit"
          fill="var(--color-accent-blue)"
          barSize={10}
          radius={12}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
