import { BrowserRouter, Route, Routes } from 'react-router'
import AiAssistant from './pages/AiAssistant'
import Booking from './pages/Booking'
import RevenueAnalytics from './pages/RevenueAnalytics'
import BussinessCategories from './pages/BussinessCategories'
import Dashboard from './pages/Dashboard'
import Billing from './pages/Billing'
import OrderAnalytics from './pages/OrderAnalytics'
import PerformanceAnalytics from './pages/PerformanceAnalytics'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/aiassistant' element={<AiAssistant />} />
          <Route path='/billing' element={<Billing />} />
          <Route
            path='/bussiness-categories'
            element={<BussinessCategories />}
          />
          <Route path='/booking' element={<Booking />} />
          <Route path='/revenue-analytics' element={<RevenueAnalytics />} />
          <Route path='/order-analytics' element={<OrderAnalytics />} />
          <Route
            path='/performance-analytics'
            element={<PerformanceAnalytics />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/auth/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
