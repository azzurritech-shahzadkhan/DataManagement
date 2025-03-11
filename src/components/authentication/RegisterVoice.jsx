import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SpeechRecognition from 'react-speech-recognition';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [listening, setListening] = useState(false);

  // Start Listening Function (Calls AI Endpoint)
  const handleStartListening = async () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });

    try {
      await axios.post('https://your-ai-endpoint.com/start-listening'); // Start listening
    } catch (err) {
      setError('Failed to start listening.');
    }
  };

  // Stop Listening & Fetch Processed Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setListening(false);
    SpeechRecognition.stopListening();

    try {
      // Fetch processed voice data
      const response = await axios.get('https://your-ai-endpoint.com/get-data');

      if (response?.data) {
        setFormData({
          username: response.data.username || '',
          email: response.data.email || '',
          password: response.data.password || ''
        });
      }
    } catch (err) {
      setError('Failed to fetch processed data.');
    }
  };

  // Final Signup Submission
  const handleSignUp = async () => {
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('https://data-mangement.vercel.app/signup', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response?.status === 201) {
        setSuccess('Registration successful!');
        navigate('/');
      }
    } catch (err) {
      if (err.response?.status === 422) {
        setError('Password does not meet the required criteria.');
      } else if (err.response?.status === 409) {
        setError('User with this email already exists.');
      } else {
        setError(err.response?.data?.message || 'Registration failed');
      }
    }
  };

  return (
    <form className='w-full flex justify-center'>
      <div className='w-full max-w-md mt-5 px-5 py-5 border rounded-lg flex flex-col items-center'>
        <h6 className='text-white text-center'>Register with</h6>

        <div className='w-full'>
          <label className='text-white'>Name</label>
          <input
            type='text'
            name='username'
            placeholder='Your full name'
            value={formData.username}
            className='border h-10 rounded bg-transparent px-4 text-white w-full'
            required
            readOnly
          />
        </div>

        <div className='w-full mt-3'>
          <label className='text-white'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Your email'
            value={formData.email}
            className='border h-10 rounded bg-transparent px-4 text-white w-full'
            required
            readOnly
          />
        </div>

        <div className='w-full mt-3'>
          <label className='text-white'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Your password'
            value={formData.password}
            className='border h-10 rounded bg-transparent px-4 text-white w-full'
            required
            readOnly
          />
        </div>

        <button type='button' onClick={handleSignUp} className='bg-blue-500 text-white w-full py-2 mt-4 rounded'>
          SIGN UP
        </button>
        {success && <p className='text-green-500 text-center mt-2'>{success}</p>}
        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}

        <p className='text-gray-400 mt-3'>Already have an account? <Link to='/' className='text-blue-400'>Sign In</Link></p>

        {/* Voice Input Section */}
        <div className='bg-blue-600 p-4 rounded flex flex-col items-center mt-5'>
          <h2 className='font-bold text-white text-xl text-center mb-2'>Speech to Text</h2>
          <button onClick={handleStartListening} className='bg-green-500 px-4 text-white font-bold rounded mb-2'>
            {listening ? 'Listening...' : 'Start Voice Input'}
          </button>
          <button onClick={handleSubmit} className='bg-yellow-500 px-4 text-white font-bold rounded mb-2'>
            Process Voice & Auto-Fill
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
