import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="md:columns-2 mt-11">
      <div>
        <h2 className="text-xl text-indigo-500  flex justify-center font-bold mb-11">
          MONTH WISE SELL
        </h2>
        <div className="flex justify-center mb-11">
          <LineChart width={350} height={300} data={data}>
            <Line dataKey={"sell"}></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend />
          </LineChart>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-indigo-500  flex justify-center font-bold mb-11">
          Investment VS Revenue
        </h2>
        <div className="flex justify-center font-bold mb-11">
          <AreaChart
            width={400}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month"></XAxis>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-indigo-500  flex justify-center font-bold mb-11">
          Investment VS Revenue
        </h2>
        <div className="flex justify-center mb-11">
          <BarChart width={350} height={300} data={data}>
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-indigo-500  flex justify-center font-bold mb-11">
          Investment VS Revenue
        </h2>
        <div className="flex justify-center mb-11">
          <PieChart width={350} height={300}>
            <Pie
              data={data}
              dataKey="investment"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
