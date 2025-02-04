import axios from 'axios'
import { useState, useEffect } from 'react'

export const PriceChart = () => {
  const [dataPriceChart, setDataPriceChart] = useState([])
  

  useEffect(() => {
    axios
      .get('http://localhost:8004/Dashboard/price-chart-data')
      .then(response => {
        setDataPriceChart(response.data.data)
      })
      .catch(error => console.error(error))
  }, []);

  return dataPriceChart;
  
}


// export const GuageChart=()=>{
//   const [dataGuageChart,setDataGuageChart]=useState([])
//   useEffect(()=>{
//     axios
//     .get("http://localhost:8004/gauge-chart").then((res)=>{
// setDataGuageChart(res.data.data)
//   })
//   .catch(error=>console.log(error))},[])
//   return dataGuageChart;
  
  
// }

export const HeatMapChart = ()=>{
  const [dataHeatChart,setDataHeatChart]=useState([])
  useEffect(()=>{
axios.get("http://localhost:8004/dahsboard/heat-chart-data").then((res)=>setDataHeatChart(res.data.data)).catch((error)=>console.error(error))
  },[])
  return dataHeatChart
}