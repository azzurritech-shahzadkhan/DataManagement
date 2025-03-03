import axios from 'axios'
import { useEffect, useState } from 'react'

export const PieChartApi = () => {
  const [pieChartData, setPieChartData] = useState([])
  useEffect(() => {
    axios
      .get('http://34.56.157.240:8000/pie-chart-data')
      .then(res => setPieChartData(res.data.data))
      .catch(err => console.log(err))
  }, [])

  return pieChartData
}

export const PriceBarChartData = () => {
  const [priceChartData, setPriceChartData] = useState([])
  console.log("price chart data is this:",priceChartData);
  useEffect(() => {
    axios
      .get('http://34.56.157.240:8000/orders/bar-chart-data')
      .then(res => setPriceChartData(res.data.data))
  }, [])
  return priceChartData
}
