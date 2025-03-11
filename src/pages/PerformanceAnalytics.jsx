import { CustomerRecomendationChat } from '@/components/dashboard/CustomerRecomendationChart'
import GuageChart from '@/components/dashboard/GuageChart'
import Container from './Container'
import { useNavigate } from 'react-router'

const PerformanceAnalytics = () => {
  const navigate = useNavigate()

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
      <div className='mt-4 grid xl:grid-cols-2  grid-cols-1 gap-4'>
        <div>
          <CustomerRecomendationChat />
        </div>
        <div className='overflow-hidden flex  justify-center'>
          <GuageChart />
        </div>
      </div>
    </Container>
  )
}

export default PerformanceAnalytics
