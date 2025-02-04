import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLoginUser = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      const response = await axios.post(
        'https://q0k6r4m5-8000.euw.devtunnels.ms/signin',
        formData,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      setSuccess('Login successful!');
      setError('');
      console.log('Login successful:', response.data);

     
      localStorage.setItem('token', response.data.token);

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  return (
    <>
      <form onSubmit={handleLoginUser}>
        <div className='flex flex-col mt-8 w-full'>
          {/* Email Field */}
          <div className='flex flex-col space-y-2 w-full'>
            <label className='text-white text-sm font-medium'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              className='h-12 rounded-lg bg-transparent border px-4 text-white focus:outline-none'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col space-y-2 mt-6 w-full'>
            <label className='text-white text-sm font-medium'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Your password'
              className='h-12 rounded-lg bg-transparent border px-4 text-white focus:outline-none'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Error & Success Messages */}
          {error && <p className='text-red-500 mt-2'>{error}</p>}
          {success && <p className='text-green-500 mt-2'>{success}</p>}

          {/* Submit Button */}
          <div className='mt-6 w-full'>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600'
            >
              SIGN IN
            </button>
          </div>

          {/* Sign Up Link */}
          <div className='mt-6 text-center'>
            <p className='text-white text-sm'>
              Don't have an account?{' '}
              <Link to='/auth/Register' className='underline text-blue-400'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
