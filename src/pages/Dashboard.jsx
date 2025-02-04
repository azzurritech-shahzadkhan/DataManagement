import ApexChart from '@/components/dashboard/HeatMapChart'

import Container from './Container'

import { PriceBarChart } from '@/components/dashboard/PriceBarChart'

import { PriceChart } from '@/api/DashboardApi'
const Dashboard = () => {
  const data = PriceChart()
  return (
    <Container>
      <div className='w-full'>
        <div className='w-full  grid lg:grid-cols-2 md:grid-cols-1'>
          <div>
            <ApexChart />
          </div>
          <div className='overflow-x-auto scrollbar'>
            <PriceBarChart data={data} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
