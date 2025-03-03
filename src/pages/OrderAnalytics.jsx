import PieChartCircle from '@/components/dashboard/PieChart'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
// import { PriceChart } from '@/api/DashboardApi'
import { PriceBarChartData } from '@/api/orderAnalyticApi'

const OrderAnalytics = () => {
  const data=PriceBarChartData()
  console.log("price chart data is coming here",data)
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
