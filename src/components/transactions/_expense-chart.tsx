import { useTheme } from "next-themes";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 15 },
  { name: "Investment", value: 20 },
  { name: "Others", value: 35 },
];

const COLORS = ["#343C6A", "#FC7900", "#232323", "#396AFF"];

const RADIAN = Math.PI / 180;

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: LabelProps) => {
  const radius = outerRadius * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px",
        marginBottom: "30px",
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
      <tspan
        x={x}
        y={y + 15}
        style={{
          fontSize: "12px",
          fontWeight: "normal",
        }}
      >
        {data[index].name}
      </tspan>
    </text>
  );
};

export default function ExpenseChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>
        {/* Main Pie */}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          //   label={renderCustomizedLabel}
          outerRadius={100}
          fill={theme === "dark" ? "#FFFFFF" : "#171e2e"}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="transparent"
              strokeWidth={index === 1 ? 6 : 6}
            />
          ))}
        </Pie>

        {/* Overlay Doughnut Pie */}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={110}
          fill="transparent"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                index === 2 || index === 3
                  ? "transparent"
                  : COLORS[index % COLORS.length]
              }
              stroke={theme !== "dark" ? "#FFFFFF" : "#171e2e"}
              strokeWidth={6}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
