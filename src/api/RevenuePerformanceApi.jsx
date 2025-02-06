import axios from 'axios'
import { useEffect, useState } from 'react'

export const RevenueGradientChartData = () => {
  const [gradientChartData, setGradientChartData] = useState([])

  useEffect(() => {
    axios
      .get('https://dash-board-apis.vercel.app/gradient-chart-data')
      .then(response => {
        const data = response.data.data.map(item => ({
          month: item.month.trim(),
          desktop: item.desktop,
          mobile: item.mobile
        }))
        setGradientChartData(data)
      })
      .catch(err => console.error('Error fetching data:', err))
  }, [])

  return gradientChartData
}

export const RevenuePriceBarChart = () => {
  const [revenuePriceChartData, setRevenuePriceChartData] = useState([])
  useEffect(() => {
    axios
      .get('https://dash-board-apis.vercel.app/revenue/bar-chart-data')
      .then(res => setRevenuePriceChartData(res.data.data))
  }, [])

  return revenuePriceChartData
}
