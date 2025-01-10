import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  //   YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";
import { BalanceHistoryData } from "./_chart-data";

function CustomAxis({ x, y, payload }: any) {
  return (
    <g
      transform={`translate(${x},${y})`}
      className="text-sm text-[#718EBF] dark:text-gray-400"
    >
      <text x={0} y={0} dy={25} textAnchor="middle" fill="currentColor">
        {payload.value}
      </text>
    </g>
  );
}

export default function HistoryChart() {
  const { theme } = useTheme();
  const breakpoint = useBreakpoint();
  const [chartData] = useState(BalanceHistoryData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{
          top: 25,
          right: 25,
          left: 25,
          bottom: 25,
        }}
      >
        <defs>
          <linearGradient id="balance-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="month"
          tick={<CustomAxis />}
          axisLine={false}
          tickLine={false}
        />
        {/* <YAxis
            dataKey="amt"
            tick={<CustomAxis />}
            axisLine={false}
            tickLine={false}
          /> */}
        <Tooltip
          content={<></>}
          cursor={{
            strokeWidth: breakpoint === "xs" ? 30 : 50,

            stroke: theme === "dark" ? "#1F2937" : "rgb(237, 239, 243)",
          }}
          wrapperStyle={{
            boxShadow: "0 0 1px 0px 4px 50px rgba(73, 93, 112, 0.08)",
            background: "red",
          }}
        />
        <CartesianGrid
          strokeDasharray="5 5"
          stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#1814F3"
          strokeWidth={breakpoint === "xs" ? 2 : 4}
          fill="url(#balance-gradient)"
          activeDot={{
            stroke: "#fff",
            strokeWidth: breakpoint === "xs" ? 2 : 5,
            r: breakpoint === "xs" ? 5 : 10,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
