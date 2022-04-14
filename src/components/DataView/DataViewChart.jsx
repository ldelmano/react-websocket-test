import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DataViewChart = ({ history }) => {
  const series = [
    {
      name: "1",
      data: history.filter(item => item.id === 1),
      stroke: "#8884d8",
    },
    {
      name: "2",
      data: history.filter(item => item.id === 2),
      stroke: "#82ca9d",
    },
  ];

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart width={1000} height={300}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            hide
            dataKey="timestamp"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="data" />
          <Tooltip />
          <Legend />
          {series.map(s => (
            <Line
              dataKey="data"
              data={s.data}
              name={s.name}
              key={s.name}
              connectNulls
              stroke={s.stroke}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataViewChart;
