import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HDIMSComprehensiveDemoDashboard from './HDIMSComprehensiveDemoDashboard.jsx'
import HDIMSDemoDashboard from "./HDIMSDemoDashboard.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HDIMSComprehensiveDemoDashboard /> */}
    <HDIMSDemoDashboard />
  </StrictMode>,
)
