import { useState, useEffect } from 'react';
import Container from './Container';
import { getCookie } from '@/lib/cookies';

const Setting = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {

    const cookie=getCookie("refreshToken")
    const fetchData = async () => {
      try {
        const response = await fetch('https://data-mangement.vercel.app/refresh-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh_token: cookie,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div>Setting</div>
      {error && <p>Error: {error}</p>}
      {data && <p className='text-wrap border'>accessToken:{JSON.stringify(data.access_token)}</p>}
      {data && <p>Token Type:{JSON.stringify(data.token_type)}</p>}
    </Container>
  );
};

export default Setting;
