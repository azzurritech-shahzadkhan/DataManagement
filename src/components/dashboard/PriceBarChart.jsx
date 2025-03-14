/* eslint-disable react/prop-types */

import { Bar, BarChart, XAxis, Tooltip, Cell, YAxis } from 'recharts'


// Array of colors for each bar
const barColors = [
  '#4F46E5',
  '#FF6347',
  '#32CD32',
  '#FFD700',
  '#8A2BE2',
  '#FF4500',
  '#FFD700',
  '#FF6347',
  '#FFD700',
  '#4F46E5'
]

export function PriceBarChart ({data}) {
 

  
  return (
    <div className='p-6 rounded-lg bg-white shadow text-white chart w-full  overflow-x-auto  scrollbar'>
      <div className='mb-4'>
        <h2 className='text-lg font-semibold'>Price per brand</h2>
      </div>
      <div className='relative w-full  text-white'>
        <BarChart
          width={450}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: -5 }}
        >
           <YAxis 
            dataKey="desktop" 
            tickLine={true} 
            tickMargin={10} 
            axisLine={false} 
            tick={{ fill: 'white', fontSize: '9px' }} 
          />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value => value}
            tick={{ fill: 'white', fontSize: '9px' }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(200, 200, 200, 0.3)' }}
            content={({ payload, label }) => {
              if (!payload || !payload.length) return null
              return (
                <div className='p-2 bg-white  border rounded shadow text-sm'>
                  <p className='font-medium text-red-500' >{label}</p>
                  {payload.map(item => (
                    <div key={item.dataKey} className='flex justify-between'>
                      <span className='text-blue-500'>{item.name}:</span>
                      <span className='text-blue-500'>{item.value}</span>
                    </div>
                  ))}
                </div>
              )
            }}
          />
          {/* Single Bar Component with Dynamic Fill Color for Each Bar */}
          <Bar dataKey='desktop' radius={8}>
            {data.map((entry, index) => (
              <Cell key={index} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>

   
      </div>
    </div>
  )
}
