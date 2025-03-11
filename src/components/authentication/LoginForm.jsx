

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login, {setCookie } from "@/lib/login"; 

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleLoginUser = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await login.post("/signin", formData);

    // Ensure response is successful
    if (response.status !== 200) {
      throw new Error("Login failed. Please try again.");
    }

    console.log("User data received:", response);

    // Extract tokens & expiration times from response
    const { 
      access_token, 
      refresh_token, 
      access_token_expires_at, 
      refresh_token_expires_at 
    } = response.data;

    // Validate tokens
    if (!access_token || !refresh_token) {
      throw new Error("Invalid login response. Missing tokens.");
    }

    // Convert expiration times from ISO format to timestamps
    const accessExp = new Date(access_token_expires_at).getTime();
    const refreshExp = new Date(refresh_token_expires_at).getTime();

    if (formData.rememberMe) {
      // Store access token & expiration in cookies
      setCookie("accessToken", access_token, accessExp);
      setCookie("accessExp", accessExp);

      // Store refresh token & expiration in cookies
      setCookie("refreshToken", refresh_token, refreshExp);
      setCookie("refreshExp", refreshExp);
    } else {
      // Store access token in sessionStorage
      sessionStorage.setItem("accessToken", access_token);
      sessionStorage.setItem("accessExp", accessExp.toString());

      // Refresh token should always persist in cookies
      setCookie("refreshToken", refresh_token, refreshExp);
      setCookie("refreshExp", refreshExp);
    }

    // Set Authorization Header for future requests
    login.defaults.headers.Authorization = `Bearer ${access_token}`;

    console.log("Login successful, redirecting...");
    navigate("/bussiness-categories");

  } catch (err) {
    console.error("Login error:", err);
    setError(err.message || "Login failed. Please try again.");
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
        {/* {success && <p className='text-green-500 mt-2'>{success}</p>} */}

        <div className='xl:mt-[23.98px] mt-[15px] w-full'>
          <label className='inline-flex items-center xl:mb-5 mb-3 cursor-pointer'>
            <input
              type='checkbox'
              name='rememberMe'
              className='sr-only peer'
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <div
              className={`relative w-11 h-6 rounded-full 
                peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                dark:bg-gray-700 ${
                  formData.rememberMe
                    ? 'bg-blue-600 dark:bg-blue-600'
                    : 'bg-gray-200'
                }`}
            >
              <div
                className={`absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full w-5 h-5 transition-all 
                ${formData.rememberMe ? 'translate-x-5 border-white' : ''}`}
              ></div>
            </div>
            <span className='ml-3 xl:text-sm text-[12px] font-medium text-white'>
              Remember me
            </span>
          </label>
        </div>

        <div className='xl:mt-6 mt-4 w-full'>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white xl:py-3 lg:py-2 py-1 rounded-lg hover:bg-blue-600'
          >
            SIGN IN
          </button>
        </div>

        <div className='mt-6 text-center'>
          <p className='text-white text-sm'>
            Don&apos;t have an account?
            <Link to='/register' className='underline text-blue-400'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
