import PieChartCircle from '@/components/dashboard/PieChart'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
import { PriceChart } from '@/api/DashboardApi'

const OrderAnalytics = () => {
  const data=PriceChart()
  return (
    <Container>
      <div className='gap-4 w-full min-h-screen overflow-y-auto grid xl:grid-cols-2 grid-cols-1 mt-4'>
        <PriceBarChart data={data} />
        <PieChartCircle  />
      </div>
    </Container>
  )
}

export default OrderAnalytics
