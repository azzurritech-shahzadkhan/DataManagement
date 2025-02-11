import { Link } from 'react-router'
import LoginForm from '@/components/authentication/LoginForm'

const Login = () => {
  return (
    <>
      <div className='grid grid-cols-2   h-screen overflow-hidden'>
        <div
          className={` grid bg-cover bg-center w-full min-h-screen grid-cols-1 place-items-center`}
          style={{ backgroundImage: `url('/public/images/signup-bg.png')` }}
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

        <div className='grid-cols-1 sign-up-bg   flex flex-col  justify-center ps-[80px]'>
          <div className='flex flex-col  w-[350px] '>
            <div>
              <div className='space-y-1'>
                <h1 className='font-semibold  text-[30px] leading-[39px] text-white'>
                  Nice to see you!
                </h1>
                <p className='text-[14px] font-medium leading-[19px] text-[hsla(214,20%,69%,1)]'>
                  Enter your email and password to sign in
                </p>
              </div>
            </div>

            <LoginForm />
          </div>

          <div className='text-white mt-5 text-[rgba(160,174,192,1)]  max-w-[421px] justify-center'>
            <p className='leading-[21px] font-normal text-[14px]'>
              @2021,Made with ❤️by Simmple & Creative Tim for a better web
            </p>
            <div className='flex text-[14px]  font-normal   justify-around '>
              <p className='leading-[21px]'>Marketplace</p>
              <p className='leading-[21px]'>Blog</p>
              <p className='leading-[21px]'>License</p>
            </div>
          </div>
          <div className='mt-5'>
            <Link to='/dashboard'>
              <p className='text-white hover:underline hover:text-blue-700'>
                GO to dashboard
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
