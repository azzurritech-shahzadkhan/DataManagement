import { useState } from 'react'
import Navbar from '../components/dashboard/Navbar'
import Sidebar from '../components/dashboard/Sidebar'

const Container = ({ children }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  return (
    <>
      <div className='flex min-h-screen scrollbar-hide overflow-hidden'>
        <aside
          className={`h-screen xl:w-[264px] xl:static ${
            isSidebarShow
              ? 'z-10 overflow-auto scrollbar transition-all duration-700 fixed left-0 top-0'
              :'fixed left-[-300px] overflow-hidden  transition-all duration-700'
          }`}
        >
          <Sidebar  
            isSidebarShow={isSidebarShow}
            setIsSidebarShow={setIsSidebarShow}
          />
        </aside>
        <div className='flex-1 flex flex-col  h-screen'>
          <header>
            <Navbar
              isSidebarShow={isSidebarShow}
              setIsSidebarShow={setIsSidebarShow}
            />
          </header>
          <main className='px-4 py-6   flex-1 mt-1 h-screen overflow-auto scrollbar '>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Container
