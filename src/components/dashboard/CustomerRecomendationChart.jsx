import { PerformanceApi } from '@/api/PerformanceApi'
import { Bar, BarChart, XAxis, Tooltip, Cell, YAxis } from 'recharts'


const barColors = ['#4F46E5', '#FF6347', '#32CD32', '#FFD700']

export function CustomerRecomendationChat () {
  const data = PerformanceApi()
  return (
    <div className='p-6 rounded-lg bg-white shadow text-white chart w-full overflow-hidden '>
      <div className='mb-4'>
        <h2 className='text-lg font-semibold'>Customer&apos;s Recomendation</h2>
      </div>
      <div className='relative w-full  text-white'>
        <BarChart
          width={250}
          height={300}
          data={data}
          margin={{ top: 20, right: 0, left: 30, bottom: -5 }}
        >
          <YAxis
            dataKey='desktop'
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
                <div className='p-2 bg-white border rounded shadow text-sm'>
                  <p className='font-medium'>{label}</p>
                  {payload.map(item => (
                    <div key={item.dataKey} className='flex justify-between'>
                      <span>{item.name}:</span>
                      <span>{item.value}</span>
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

        {/* Custom Labels (outside the BarChart) */}
        <div
          className='absolute top-0 left-0 flex flex-col justify-between text-white'
          style={{ height: '100%', marginLeft: '0px' }}
        >
          {data?.map((entry, index) => (
            <div key={index} className='text-xs'>
              {entry.desktop}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
