import ApexChart from '@/components/dashboard/HeatMapChart'

import Container from './Container'

import { PriceBarChart } from '@/components/dashboard/PriceBarChart'

import { PriceChart } from '@/api/DashboardApi'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
  const data = PriceChart()

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/'); // Redirect to home if no access token
    }
  }, [navigate]);
  return (
    <Container>
      <div className='w-full'>
        <div className='w-full  grid grid-cols-1 lg:grid-cols-2 overflow-x-auto    sm:pe-0 pe-[50px]'>
          <div className='w-full   overflow-x-auto  scrollbar'>
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
