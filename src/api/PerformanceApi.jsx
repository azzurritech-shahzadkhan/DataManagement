import axios from 'axios'
import { useEffect, useState } from 'react'

export const PerformanceApi = () => {
  const [performanceChart, setPerformanceChart] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8004/performance-chart-bar-data')
      .then(response => {
        setPerformanceChart(response.data.data)
      })
      .catch(err => console.error(err))
  }, [])
  return performanceChart
}
