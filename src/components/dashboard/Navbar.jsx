/* eslint-disable react/prop-types */
import { Bell, Search } from 'lucide-react'
import { User } from '../../assets/dashboard-icons/DashboardIcon'
import { Settings } from 'lucide-react'
import { Menu } from 'lucide-react';


const Navbar = ({isSidebarShow,setIsSidebarShow}) => {

 
    
  return (
    <>
      <div className='text-white pt-[22.5px] flex justify-between pe-[47px]  px-4'>
        <div className=' font-medium text-[24px] flex items-center gap-4'>
           <Menu  className='xl:hidden block' onClick={()=>setIsSidebarShow(!isSidebarShow)}/>
          {/* <p className='text-[#0AAEC0]  leading-6'>
            Pages / <span className='text-white leading-6 '>Dashboard</span>
          </p> */}
        </div>
        <div className='flex gap-[18px]'>
          <div className='flex relative bg-[#0F1535] px-[11.25px] py-[12.25px]  items-center rounded-[20px] w-[199px]  border border-[#E2E8F04D]'>
            <Search className='absolute top-[10] text-gray-700 w-[15px] h-[15px]' />
            <input
              type='Type here...'
              placeholder='Type here'
              className='bg-transparent placeholder:text-[12px] placeholder:leading-[18px] placeholder:text-[#A0AEC0] text-[#A0AEC0]  w-full ps-[20.25px] focus:outline-none'
            />
          </div>
          <div className='flex    gap-[18px]'>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] flex gap-[2px] items-center justify-center'>
              <User />
              <span>Sign In</span>
            </button>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] flex gap-[2px] items-center justify-center'>
              <Settings className='w-[12px] h-[12px] shrink-0 text-gray-500' />
            </button>
            <button className='text-gray-500 text-[12px]  font-normal leading-[18px] flex gap-[2px] items-center justify-center'>
              <Bell className='w-[12px] h-[12px] shrink-0 text-gray-500' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
