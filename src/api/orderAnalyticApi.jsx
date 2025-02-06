import axios from 'axios'
import { useEffect, useState } from 'react'

export const PieChartApi = () => {
  const [pieChartData, setPieChartData] = useState([])
  useEffect(() => {
    axios
      .get('https://dash-board-apis.vercel.app/pie-chart-data')
      .then(res => setPieChartData(res.data.data))
      .catch(err => console.log(err))
  }, [])

  return pieChartData
}

export const PriceBarChartData = () => {
  const [priceChartData, setPriceChartData] = useState([])
  useEffect(() => {
    axios
      .get('https://dash-board-apis.vercel.app/orders/bar-chart-data')
      .then(res => setPriceChartData(res.data.data))
  }, [])
  return priceChartData
}
