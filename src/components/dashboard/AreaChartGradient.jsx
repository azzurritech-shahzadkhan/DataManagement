import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { RevenueGradientChartData } from '@/api/RevenuePerformanceApi'

// Configuration for chart color labels
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  }
}

export function AreaChartGradient () {
  const data = RevenueGradientChartData()
  
  return (
    <Card className='sm:w-full  chart text-white overflow-x-auto border-0 '>
      <CardHeader className="w-[400px]">
        <CardTitle>Sales overview</CardTitle>
        <CardDescription>
          <p className='text-[14px] font-semibold leading-[19.6px] text-[#A0AEC0]'>
            <span className='text-[#01B574]'> (5)more </span> in 2021
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="ps-0 ms-0">
        {/* Scrollable wrapper on mobile screens */}
        <div className="w-full overflow-x-auto scrollbar pb-2">
          <div className="min-w-[600px]"> {/* Minimum width to force scrolling */}
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 0,
                  right: 0
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={value => value.slice(0, 3)} // Format X-axis values (e.g., "Jan" for "January")
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`} // Format Y-axis values (e.g., "$0", "$150", etc.)
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                  <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                    <stop
                      offset='5%'
                      stopColor='var(--color-desktop)'
                      stopOpacity={0.8}
                    />
                    <stop
                      offset='95%'
                      stopColor='var(--color-desktop)'
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                    <stop
                      offset='5%'
                      stopColor='var(--color-mobile)'
                      stopOpacity={0.8}
                    />
                    <stop
                      offset='95%'
                      stopColor='var(--color-mobile)'
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey='mobile'
                  type='natural'
                  fill='url(#fillMobile)'
                  fillOpacity={0.4}
                  stroke='var(--color-mobile)'
                  stackId='a'
                />
                <Area
                  dataKey='desktop'
                  type='natural'
                  fill='url(#fillDesktop)'
                  fillOpacity={0.4}
                  stroke='var(--color-desktop)'
                  stackId='a'
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
