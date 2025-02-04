import { useState } from 'react'
import { AppleIcon } from 'lucide-react'
import { Link } from 'react-router'
import { FaceBook, GoogleIcon } from '@/assets/sign-up-icons/SignUpIcon'
import axios from 'axios'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    try {
      const response = await axios.post(
        'https://q0k6r4m5-8000.euw.devtunnels.ms/signup',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Cookie:
              '.Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPdmuWdvQ81PqM6ah_hgCWdC5fTFR...'
          }
        }
      )
      setSuccess('Registration successful!')
      console.log('Response:', response.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
      console.error('Error:', err)
    }
  }

  return (
    <>
      <form onSubmit={handleSignUp}>
        <div className='border w-[452.5px] mt-[10px] px-[30px] py-[10px] border-[255,255,255,0.04] rounded-[30px] flex justify-center'>
          <div className='flex flex-col  w-full'>
            <h6 className='text-[13px] leading-[23.4px] font-bold  text-white text-center'>
              Register with
            </h6>
            <div className='flex gap-2 mt-[10px] justify-center'>
              <div className='border rounded-[5px]  p-[5px] cursor-pointer flex items-center justify-center'>
                <FaceBook />
              </div>
              <div className='border rounded-[5px]  p-[5px] cursor-pointer flex items-center justify-center'>
                <AppleIcon className='text-white' />
              </div>
              <div className='border rounded-[5px] flex items-center justify-center  p-[5px] cursor-pointer '>
                <GoogleIcon />
              </div>
            </div>
            <p className='text-[rgba(160,174,192,1)] text-[12px] leading-[20.2px] font-bold text-center mt-2'>
              or
            </p>
            <div className='flex flex-col w-full gap-2'>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white text-[14px] font-medium leading-[19.6px]'>
                  Name
                </label>
                <input
                  type='text'
                  name='username'
                  placeholder='Your full name'
                  value={formData.username}
                  onChange={handleChange}
                  className='border h-[35px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white text-[14px] font-medium leading-[19.6px]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                  className='border h-[40px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white text-[14px] font-medium leading-[19.6px]'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Your password'
                  value={formData.password}
                  onChange={handleChange}
                  className='border h-[40px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
            </div>

            <div className='mt-[23.98px] w-full'>
              <label className='inline-flex items-center mb-5 cursor-pointer'>
                <input type='checkbox' className='sr-only peer' />
                <div className='relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600'>
                  <div className='absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full w-5 h-5 transition-all peer-checked:translate-x-5 peer-checked:border-white'></div>
                </div>
                <span className='ml-3 text-sm font-medium text-white'>
                  Remember me
                </span>
              </label>
            </div>

            <div className='mt-[10px] w-full'>
              <button
                className='flex items-center justify-center bg-[hsla(212,100%,50%,1)] text-white text-[10px] leading-[15px] font-bold w-full h-[44.96px] rounded-[12px] p-2'
                type='submit'
              >
                SIGN UP
              </button>
            </div>
            {success && <p className='text-green-500 text-center mt-2'>{success}</p>}
            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
            <div className='mt-[22.61px]'>
              <p className='text-[12px] font-bold leading-[19.6px] text-[rgba(160,174,192,1)]'>
                Already have an account?{' '}
                <Link to='/' className='text-white underline hover:text-blue-400'>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
