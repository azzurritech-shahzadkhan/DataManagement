import { Link } from 'react-router'
import { sidebar } from '@/assets/mock-data/data'
import {

  DashboardIcon,
  Profile,
  Setting
} from '../../assets/dashboard-icons/DashboardIcon'
import { X } from 'lucide-react';
import { useLocation } from 'react-router';


const Sidebar = ({isSidebarShow,setIsSidebarShow}) => {
  const location=useLocation();
  console.log("current lcoation is ",location);

  return (
    <>
      <div className=' pt-[10px] ps-[10px] w-full'>
    
        <div className='px-[22px] py-[36px] relative side_bar rounded-[20px] overflow-auto  scrollbar text-center  '>
       <span className='absolute top-1 right-1'>     <X  className='text-gray-500 cursor-pointer w-4 hover:text-white transition-all duration-100 xl:hidden block' onClick={()=>setIsSidebarShow(!isSidebarShow)}/></span>
          <div className='  pb-[31px] custom_border'>
            <p className='text-white text-[14px] leading-[14px] font-normal '>
              Data Management
            </p>
          </div>
          <div className=' mt-[22.5px]  graph-status'>
            <ul className='w-full '>
            {sidebar.map((item,index)=>
              <li className='w-full' key={index.id}>
              <Link to={item.link}>
                <button
                  className={`w-full group rounded-[15px] ${item.link===location.pathname&&"bg-[#1A1F37]"}  hover:bg-blue-900 text-white py-[12px] px-[16px] flex items-center gap-[15px] whitespace-nowrap`}
                  style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
                >
                  <span className='bg-[#061238]  w-[30px] h-[30px] flex items-center justify-center  rounded-[12px] shrink-0'>
                
                    <DashboardIcon className='text-current group-hover:text-white  text-[#0075FF]' />
                  </span>
                 {item.title}
                </button>
                </Link>
              </li>
              )}
            
            </ul>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Sidebar
