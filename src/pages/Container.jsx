import { useState } from 'react'
import Navbar from '../components/dashboard/Navbar'
import Sidebar from '../components/dashboard/Sidebar'

const Container = ({ children }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  return (
    <>
    <div className="flex min-h-screen w-full overflow-x-hidden">
  <aside
    className={`h-screen w-[264px] xl:static ${
      isSidebarShow
        ? "z-10 overflow-auto scrollbar transition-all duration-700 fixed left-0 top-0"
        : "fixed left-[-300px] w-full transition-all duration-700 z-10"
    }`}
  >
    <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
  </aside>
  <div className="flex-1 flex flex-col h-screen w-full">
    <header>
      <Navbar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
    </header>
    <main className="px-4 py-6 flex-1 mt-1 h-screen overflow-auto w-full">
      {children}
    </main>
  </div>
</div>

    </>
  )
}

export default Container
