import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'

const root = createRoot(document.getElementById('root'));  // <-- yahan ReactDOM nahi, createRoot use karo
root.render(
  <StrictMode>
    <HomePage/>
  </StrictMode>
);
