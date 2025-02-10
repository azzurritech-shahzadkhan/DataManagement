

import RegisterForm from "@/components/authentication/RegisterForm"

const Register = () => {
  return (
    <>
   <div className='grid grid-cols-2   h-screen overflow-hidden'>
        <div className={` grid bg-cover bg-center w-full min-h-screen grid-cols-1 place-items-center`} style={{backgroundImage:`url('/src/assets/images/signup-bg.png')`}}>
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
      <div className='flex h-full items-center'>
<div className="flex flex-col justify-center items-center">
<div className='text-white max-w-[333px]  text-center'>
    <h1 className='text-[20px] font-bold leading-[20px]'>Welcome!</h1>
    <p className='mt-[5px] font-medium text-[12px] leading-5 text-center'>Use these awesome forms to login or create new account in your project for free.

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
