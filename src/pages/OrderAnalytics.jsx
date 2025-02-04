import PieChartCircle from '@/components/dashboard/PieChart'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
import { PriceChart } from '@/api/DashboardApi'

const OrderAnalytics = () => {
  const data=PriceChart()
  return (
    <Container>
      <div className='gap-4 w-full h-full grid grid-cols-2 mt-4'>
        <PriceBarChart data={data} />
        <PieChartCircle  />
      </div>
    </Container>
  )
}

export default OrderAnalytics
