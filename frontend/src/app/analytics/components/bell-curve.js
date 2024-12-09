"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const BellCurve = ({ score }) => {
  const generateData = () => {
    const data = [];
    for (let i = 200; i <= 800; i += 10) {
      const y =
        Math.exp(-Math.pow(i - 550, 2) / (2 * Math.pow(100, 2))) /
        (100 * Math.sqrt(2 * Math.PI));
      data.push({ x: i, y: y * 1000 });
    }
    return data;
  };

  const data = generateData();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 45, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
        <ReferenceLine
          x={score}
          stroke="red"
          label={{ value: "Your Score", position: "top" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BellCurve;
