import PieChartCircle from '@/components/dashboard/PieChart'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
// import { PriceChart } from '@/api/DashboardApi'
import { PriceBarChartData } from '@/api/orderAnalyticApi'
import { useNavigate } from 'react-router'

const OrderAnalytics = () => {
  const navigate = useNavigate()
  const data = PriceBarChartData()

  const getCookie = name => {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=')
      if (key === name) {
        return value
      }
      return null
    }
  }

  const access_token =
    getCookie('accessToken') || sessionStorage.getItem('accessToken')
  if (!access_token) {
    navigate('/')
  }

  return (
    <Container>
      <div className='gap-4 w-full min-h-screen overflow-y-auto grid xl:grid-cols-2 grid-cols-1 mt-4'>
        <PriceBarChart data={data} />
        <PieChartCircle />
      </div>
    </Container>
  )
}

export default OrderAnalytics
