import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherApp } from '../components/WeatherApp'
import "./styles/weatherStyles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherApp />
  </StrictMode>,
)
