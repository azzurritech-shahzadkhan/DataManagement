import { Link } from 'react-router'
import LoginForm from '@/components/authentication/LoginForm'

const Login = () => {
  return (
    <>
      <div className='grid xl:grid-cols-2    h-screen  '>
        <div
          className={` xl:grid bg-cover bg-center w-full min-h-screen place-items-center xl:grid-cols-1  hidden`}
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

        <div className='grid-cols-1 sign-up-bg   flex flex-col  items-center justify-center   '>
          <div className='flex flex-col w-full lg:max-w-[350px]  max-w-[300px]'>
            <div>
              <div className='space-y-1'>
                <h1 className='font-semibold  xl:text-[30px] lg-[25px] text-[20px]  xl:leading-[39px] leading-[27px] text-white'>
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
          <div className='xl:mt-5 mt-2'>
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
