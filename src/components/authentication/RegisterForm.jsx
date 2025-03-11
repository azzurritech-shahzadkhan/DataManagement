import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

import axios from 'axios'
import VoiceCapture from './VoiceCapture'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [type,setType]=useState("text");


  const navigate = useNavigate()

  console.log('form data is coming here', formData)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const passwordValidationRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
  const validatePassword = password => {
    if (!passwordValidationRegex.test(password)) {
      return 'Password must contain at least one uppercase letter, one special character, and one number.'
    }
    return null
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = async e => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    const passwordError = validatePassword(formData.password)
    if (passwordError) {
      setError(passwordError)
      return
    }

    try {
      const response = await axios.post(
        'https://data-mangement.vercel.app/signup',
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('Response is coming here:', response.status)
      if (response?.status === 201) {
        setSuccess('Registration successful!')

        navigate('/')
      }
    } catch (err) {
      console.log("erro is this,",err.response.status)
      // setError(err.response?.data?.message || 'Registration failed')
      if (err.response?.status == 422) {
        setError(
          'Password does not meet the required criteria or other validation issue.'
        )
      } else if (err.response?.status === 409) {
        setError('User with this email already exists.')
      } else {
        setError(err.response?.data?.message || 'Registration failed')
      }

     
    }
  }

  return (
    <>

    { 
      
      type==="text"?
      <form onSubmit={handleSignUp} className='w-full flex justify-center'>
        <div className='w-full lg:max-w-[452px] md:max-w-[400px] max-w-[300px] mt-[10px] xl:px-[30px] px-[20px] xl:py-[10px] py-[5px]  border-[255,255,255,0.04] rounded-[30px] flex justify-center border'>
          <div className='flex flex-col  w-full '>
            <h6 className='text-[13px] leading-[23.4px] font-bold  text-white text-center' onClick={()=>setType("voice")}>
              Register via Voice
            </h6>

            <div className='flex flex-col w-full gap-2'>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Name
                </label>
                <input
                  type='text'
                  name='username'
                  placeholder='Your full name'
                  value={formData.username}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Your password'
                  value={formData.password}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
            </div>

       

            <div className='xl:mt-[10px] mt-[5px] w-full'>
              <button
                className='flex items-center justify-center bg-[hsla(212,100%,50%,1)] text-white text-[10px] leading-[15px] font-bold w-full xl:h-[44.96px] h-[30px]  rounded-[12px] p-2 mt-3'
                type='submit'
              >
                SIGN UP
              </button>
            </div>
            {success && (
              <p className='text-green-500 text-center mt-2'>{success}</p>
            )}
            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
            <div className='xl:mt-[22.61px] mt-[15px]'>
              <p className='text-[12px] font-bold leading-[19.6px] text-[rgba(160,174,192,1)]'>
                Already have an account?
                <Link
                  to='/'
                  className='text-white underline hover:text-blue-400'
                >
                  Sign In
                </Link>
              </p>
            </div>
            <VoiceCapture/>

          </div>
        </div>
      </form>:
      <form onSubmit={handleSignUp} className='w-full flex justify-center'>
        <div className='w-full lg:max-w-[452px] md:max-w-[400px] max-w-[300px] mt-[10px] xl:px-[30px] px-[20px] xl:py-[10px] py-[5px]  border-[255,255,255,0.04] rounded-[30px] flex justify-center border'>
          <div className='flex flex-col  w-full '>
            <h6 className='text-[13px] leading-[23.4px] font-bold  text-white text-center' onClick={()=>setType("text")}>
              Register via text
            </h6>

            <div className='flex flex-col w-full gap-2'>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Name
                </label>
                <input
                  type='text'
                  name='username'
                  placeholder='Your full name'
                  value={formData.username}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white xl:text-[14px] text-[12px] font-medium leading-[19.6px]'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Your password'
                  value={formData.password}
                  onChange={handleChange}
                  className='border md:h-[35px] h-[30px] rounded-[20px] bg-transparent px-5 py-[10px] focus:outline-none text-[14px] text-[hsla(214,20%,69%,1)] placeholder:text-[hsla(214,20%,69%,1)] w-full'
                  required
                />
              </div>
            </div>

       

            <div className='xl:mt-[10px] mt-[5px] w-full'>
              <button
                className='flex items-center justify-center bg-[hsla(212,100%,50%,1)] text-white text-[10px] leading-[15px] font-bold w-full xl:h-[44.96px] h-[30px]  rounded-[12px] p-2 mt-3'
                type='submit'
              >
                SIGN UP
              </button>
            </div>
            {success && (
              <p className='text-green-500 text-center mt-2'>{success}</p>
            )}
            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
            <div className='xl:mt-[22.61px] mt-[15px]'>
              <p className='text-[12px] font-bold leading-[19.6px] text-[rgba(160,174,192,1)]'>
                Already have an account?
                <Link
                  to='/'
                  className='text-white underline hover:text-blue-400'
                >
                  Sign In
                </Link>
              </p>
            </div>
            <VoiceCapture/>

          </div>
        </div>
      </form>
      }
   

     


    </>
  )
}

export default RegisterForm
