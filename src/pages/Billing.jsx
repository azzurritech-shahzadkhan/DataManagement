import Container from './Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {PriceChart} from "@/api/DashboardApi"

const Billing = () => {
  const [item, setItem] = useState({});
  console.log("item is ocming here",item);
  

  useEffect(() => {
    axios
      .get('https://dash-board-apis.vercel.app/chart-data')
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <div>
        {item.data ? (
        <ul  className='flex flex-col'>
          <li>{item.data}</li>
        </ul>
        ) : (
          <h1>Loading...</h1>
        )}

        <PriceChart/>
      </div>
    </Container>
  );
};

export default Billing;