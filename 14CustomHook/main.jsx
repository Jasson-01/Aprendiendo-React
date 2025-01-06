import {React, StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UsersApp />
  </StrictMode>,
)

