/* eslint-disable react/prop-types */
import { Bell, Search } from 'lucide-react'
import { User } from '../../assets/dashboard-icons/DashboardIcon'
import { Settings } from 'lucide-react'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import man from '@/assets/images/man.jpg'
import { deleteCookie } from '@/lib/login'

const Navbar = ({ isSidebarShow, setIsSidebarShow }) => {
  const [isProfile, setProfile] = useState(false)
  const [profileData, setProfileData] = useState(null)
  const [error, setError] = useState()
  const navigate = useNavigate()

  const getCookie = name => {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=').map(c => c.trim());  
      if (key === name) return value
    }
    return null
  }
  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken =getCookie("accessToken") || sessionStorage.getItem("accessToken")
      console.log('access token is coming there', accessToken)
      if (!accessToken) {
        setError('Access token not found. Please log in again.')
        return
      }
      try {
        const response = await axios.get(
          'https://data-mangement.vercel.app/profile',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        setProfileData(response.data)
        console.log("profile data is coming here",response.data)
      } catch (error) {
        console.error('Error fetching profile:', error)
        setError('Failed to fetch profile. Please try again.')
      }
    }

    fetchProfile()
  }, [])

const handleLogOut = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("accessExp");
  deleteCookie("accessToken");
  deleteCookie("accessExp");
  deleteCookie("refreshToken");
  deleteCookie("refreshExp");
  navigate("/");
};

  return (
    <>
      <div className='text-white pt-[22.5px] flex justify-between pe-[47px]  px-4'>
        <div className=' font-medium text-[24px] flex items-center gap-4'>
          <Menu
            className='xl:hidden block'
            onClick={() => setIsSidebarShow(!isSidebarShow)}
          />
          {/* <p className='text-[#0AAEC0]  leading-6'>
            Pages / <span className='text-white leading-6 '>Dashboard</span>
          </p> */}
        </div>
        <div className='flex gap-[18px]'>
          <div className='flex relative bg-[#0F1535] sm:px-[11.25px] sm:py-[12.25px]  py-2 items-center rounded-[20px] sm:w-[199px]  px-2 border border-[#E2E8F04D] '>
            <Search className='absolute top-[10] text-gray-700 w-[15px] sm:h-[15px] h-[13px]' />
            <input
              type='Type here...'
              placeholder='Type here'
              className='bg-transparent sm:placeholder:text-[12px] text-[8px]   sm:placeholder:leading-[18px] placeholder:leading-[13px] placeholder:text-white text-white  w-full sm:ps-[20.25px] ps-[18px] focus:outline-none'
            />
          </div>
          <div className='flex    gap-[18px] items-center'>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] flex gap-[2px] items-center justify-center text-nowrap'>
              <User />
              <span>Sign In</span>
            </button>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] sm:flex gap-[2px] items-center justify-center hidden'>
              <Settings className='w-[12px] h-[12px] shrink-0 text-gray-500' />
            </button>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] sm:flex gap-[2px] items-center justify-center  hidden'>
              <Bell className='w-[12px] h-[12px] shrink-0 text-gray-500' />
            </button>
            <div className='relative'>
              <div
                className='w-8  h-8 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold uppercase'
                onClick={() => setProfile(!isProfile)}
              >
                P
              </div>

              {isProfile ? (
                <div className='absolute text-center  sm:w-[350px] w-[250px] border top-12 text-white right-0   space-y-2 bg-blue-950 shadow-lg rounded-lg  z-10'>
                  <div className='h-20 flex justify-center bg-white rounded-tl-sm rounded-tr-sm items-end'>
                    <div className='rounded-full'>
                      <img
                        src={man}
                        alt='error'
                        width={40}
                        height={40}
                        className='rounded-full'
                      />
                    </div>
                  </div>
                  <div className='p-3 flex flex-col gap-2'>
                    <p className='text-xl font-bold'>{profileData?.username}</p>
                    <p>{profileData?.email}</p>
                    <div className='flex justify-center gap-20 mt-2'>
                      <button
                        className='border  w-20  px-2 rounded flex items-center justify-center text-sm py-1 hover:bg-blue-500 transition'
                        onClick={() => navigate('/profile')}
                      >
                        Profile
                      </button>
                      <button
                        className='border w-20  px-3 rounded flex items-center justify-center text-sm py-1 hover:bg-blue-500 transition'
                        onClick={handleLogOut}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
