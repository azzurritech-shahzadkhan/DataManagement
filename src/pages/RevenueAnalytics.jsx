import { AreaChartGradient } from '@/components/dashboard/AreaChartGradient'
import Container from './Container'
import { PriceBarChart } from '@/components/dashboard/PriceBarChart'
import { RevenuePriceBarChart } from '@/api/RevenuePerformanceApi'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const RevenueAnalytics = () => {
  const data = RevenuePriceBarChart()

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

  useEffect(() => {
    const access_token =
      getCookie('accessToken') || sessionStorage.getItem('accessToken')

    if (!access_token) {
      navigate('/')
    }
  }, [])

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
