import RegisterForm from '@/components/authentication/RegisterTextForm'
import { useState } from 'react'


const Register = () => {
   const [signInMethod, setSignInMethod] = useState(true)
  
  return (
    <>
      <div className="grid min-h-screen overflow-hidden  xl:grid-cols-2 ">
        <div
          className={`  bg-cover bg-center w-full min-h-screen grid-cols-1 place-items-center xl:grid hidden `}
          style={{ backgroundImage: `url('/src/assets/images/signup-bg.png')` }}
        >
          <div className='text-center space-y-4 '>
            <p className='font-normal text-[20px] leading-5  text-[hsla(0,0%,100%,1)] tracking-[0.18em]'>
              INSPIRED BY THE FUTURE:
            </p>
            <p className='text-[36px] leading-[36px] font-semibold text-white tracking-[0.10em]'>
              The VISION UI DASHBOARD
            </p>
          </div>
        </div>

        <div className='xl:grid-cols-1 sign-up-bg   flex flex-col justify-center  items-center  w-full  min-h-screen'>
          <div className='flex h-full items-center justify-center w-full  '>
            <div className='flex flex-col justify-center items-center w-full   '>
              <div className='text-white  w-full max-w-[333px]  text-center  flex flex-col justify-center items-center '>
                <h1 className='xl:text-[20px] text-[15px] font-bold xl:leading-[20px] leading-[15px]'>
                  Welcome!
                </h1>
                <p className='xl:mt-[5px] mt-3px font-medium text-[12px] leading-5 text-center'>
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p>
              </div>
              

              <RegisterForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
