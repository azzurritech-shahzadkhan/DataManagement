import axios from 'axios'
import { useState, useEffect } from 'react'




export const PriceChart = () => {
  const [dataPriceChart, setDataPriceChart] = useState([]); 
  // console.log("data price chart is coming here",dataPriceChart);                     
  

  useEffect(() => {
    axios
      .get('http://34.56.157.240:8000/Dashboard/price-chart-data', {
        headers: {
          'accept': 'application/json',
        },
      })
      .then(response => {
        setDataPriceChart(response.data.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return dataPriceChart;
};



export const HeatMapChart = ()=>{
  const [dataHeatChart,setDataHeatChart]=useState([])
  useEffect(()=>{
axios.get("http://34.56.157.240:8000/dahsboard/heat-chart-data").then((res)=>setDataHeatChart(res.data.data)).catch((error)=>console.error(error))
  },[])
  return dataHeatChart
}