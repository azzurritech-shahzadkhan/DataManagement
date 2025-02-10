import { BrowserRouter, Route, Routes } from 'react-router'

import AiAssistant from './pages/AiAssistant'
import Booking from './pages/Booking'
import RevenueAnalytics from './pages/RevenueAnalytics'
import BussinessCategories from './pages/BussinessCategories'
import Billing from './pages/Billing'
import OrderAnalytics from './pages/OrderAnalytics'
import PerformanceAnalytics from './pages/PerformanceAnalytics'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'

import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import HealthCare from './pages/healthcare'
import E_Commerce from './pages/E_Commerce'
import Finance from './pages/Finance'
import Education from './pages/Education'
import SmartCities from './pages/SmartCities'
import Retail from './pages/Retail'

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
          <Route path='/health-care' element={<HealthCare />} />
          <Route path='/e-commerce' element={<E_Commerce />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/education' element={<Education />} />
          <Route path='/smart-cities' element={<SmartCities />} />
          <Route path='/retail' element={<Retail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
