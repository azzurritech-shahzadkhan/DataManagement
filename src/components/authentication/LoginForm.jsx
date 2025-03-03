import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://data-mangement.vercel.app',
  headers: { 'Content-Type': 'application/json' },
});

// Function to refresh access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('refreshToken='))
      ?.split('=')[1];

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await axios.post(`${api.defaults.baseURL}/refresh-token`, {
      refresh_token: refreshToken,
    });

    const newAccessToken = response.data.access_token;
    sessionStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.error('Failed to refresh token:', err);
    sessionStorage.removeItem('accessToken');
    window.location.href = '/login'; // Redirect to login if refresh fails
    throw err;
  }
};

// Axios Interceptor for auto-refreshing token
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/signin', formData);
      if (response.status === 200 && response.data.access_token) {
        setSuccess('Login successful!');
        sessionStorage.setItem('accessToken', response.data.access_token);
        document.cookie = `refreshToken=${response.data.refresh_token}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
        navigate('/bussiness-categories');
      } else {
        setError('Login failed. Invalid response from the server.');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleLoginUser}>
      <div className='flex flex-col xl:mt-8 mt-4 w-full'>
        <div className='flex flex-col space-y-2 w-full'>
          <label className='text-white text-sm font-medium'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Your email address'
            className='xl:h-12 h-9 rounded-lg bg-transparent border px-4 text-white focus:outline-none'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='flex flex-col space-y-2 xl:mt-6 mt-4 w-full'>
          <label className='text-white text-sm font-medium'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Your password'
            className='xl:h-12 h-9 rounded-lg bg-transparent border px-4 text-white focus:outline-none'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className='text-red-500 mt-2'>{error}</p>}
        {success && <p className='text-green-500 mt-2'>{success}</p>}

        <div className='xl:mt-6 mt-4 w-full'>
          <button type='submit' className='w-full bg-blue-500 text-white xl:py-3 lg:py-2 py-1 rounded-lg hover:bg-blue-600'>
            SIGN IN
          </button>
        </div>

        <div className='mt-6 text-center'>
          <p className='text-white text-sm'>
            Don't have an account? <Link to='/auth/Register' className='underline text-blue-400'>Sign up</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;