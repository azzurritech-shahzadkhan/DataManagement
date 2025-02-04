"use client";
import { Bar, BarChart, XAxis, Tooltip, Cell } from "recharts";

// Inline Chart Data
const chartData = [
  { month: "Brand 1", desktop: 100 },
  { month: "Brand 2", desktop: 305 },
  { month: "Brand 3", desktop: 237 },
  { month: "Brand 4", desktop: 73 },

];

// Array of colors for each bar
const barColors = [
  "#4F46E5", "#FF6347", "#32CD32", "#FFD700"
];

export function CustomerGendarChat() {
  return (
    <div className="p-6 rounded-lg bg-white shadow text-white chart w-full overflow-hidden ">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Customer's Gendar</h2>
      </div>
      <div className="relative w-full  text-white">
        <BarChart
          width={250}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 0, left: 30, bottom: -5 }} 
      
       
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
            tick={{ fill: 'white' ,fontSize:"9px"}} 
          />
          
          <Tooltip
            cursor={{ fill: "rgba(200, 200, 200, 0.3)" }}
            content={({ payload, label }) => {
              if (!payload || !payload.length) return null;
              return (
                <div className="p-2 bg-white border rounded shadow text-sm">
                  <p className="font-medium">{label}</p>
                  {payload.map((item) => (
                    <div key={item.dataKey} className="flex justify-between">
                      <span>{item.name}:</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          {/* Single Bar Component with Dynamic Fill Color for Each Bar */}
          <Bar dataKey="desktop" radius={8}>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>

        {/* Custom Labels (outside the BarChart) */}
        <div className="absolute top-0 left-0 flex flex-col justify-between text-white" style={{ height: '100%', marginLeft: '0px' }}>
          {chartData.map((entry, index) => (
            <div key={index} className="text-xs">
              {entry.desktop}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
