import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Main Meal", amount: 600 },
  { name: "Add-ons", amount: 250 },
  { name: "Drink/Water", amount: 100 },
  { name: "Balance", amount: 50 },
];

const SpendingChart = () => {
  return (
     <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `₦${value}`} />
          <Bar dataKey="amount" fill="#a8622b" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart