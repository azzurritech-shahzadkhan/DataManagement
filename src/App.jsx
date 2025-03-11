/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AiAssistant from './pages/AiAssistant';
import Booking from './pages/Booking';
import RevenueAnalytics from './pages/RevenueAnalytics';
import BussinessCategories from './pages/BussinessCategories';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';
import OrderAnalytics from './pages/OrderAnalytics';
import PerformanceAnalytics from './pages/PerformanceAnalytics';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Tracking from './pages/Tracking';
import { isAuthenticated } from './lib/cookies';

function App() {
  // ProtectedRoute component to protect private routes
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/assistant" element={<ProtectedRoute element={<AiAssistant />} />} />
        <Route path="/bussiness-categories" element={<ProtectedRoute element={<BussinessCategories />} />} />
        <Route path="/booking" element={<ProtectedRoute element={<Booking />} />} />
        <Route path="/revenue-analytics" element={<ProtectedRoute element={<RevenueAnalytics />} />} />
        <Route path="/order-analytics" element={<ProtectedRoute element={<OrderAnalytics />} />} />
        <Route path="/performance-analytics" element={<ProtectedRoute element={<PerformanceAnalytics />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/setting" element={<ProtectedRoute element={<Setting />} />} />

        {/* Other routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/tracking" element={<Tracking />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
