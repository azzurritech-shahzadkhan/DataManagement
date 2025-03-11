// import { useEffect } from 'react'
import Container from './Container'
// import { Navigate, useNavigate } from 'react-router'
// import { isAuthenticated } from '@/lib/cookies'

const Setting = () => {
  // const navigate = useNavigate()

//    const getCookie = (name) => {
//     const cookies = document.cookie.split("; ");
//     for (let cookie of cookies) {
//         const [key, value] = cookie.split("=");
//         if (key === name) return value;
//     }
//     return null;
// };


//   useEffect(() => {
//     const access_token =getCookie('accessToken') || sessionStorage.getItem('accessToken');

//     if (!access_token) {
//       navigate('/')
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])



  return (
    <Container>
      <div>Setting</div>
    </Container>
  )
}

export default Setting
