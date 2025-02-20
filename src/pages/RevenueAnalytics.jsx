import { AreaChartGradient } from '@/components/dashboard/AreaChartGradient'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
import { RevenuePriceBarChart } from '@/api/RevenuePerformanceApi'

const RevenueAnalytics = () => {
  const  data=RevenuePriceBarChart()
  
  return (
    <Container>
      <div className='grid xl:grid-cols-2  gap-4 mt-4  w-full sm:pe-0 pe-10 ps-0'>
        <AreaChartGradient />
        <PriceBarChart data={data} />
      </div>
    </Container>
  )
}

export default RevenueAnalytics
