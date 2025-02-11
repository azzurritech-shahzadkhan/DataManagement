import { Suspense,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Suspense fallback={<div>Loading...</div>}>
      <App />
   </Suspense>
  </StrictMode>
)
