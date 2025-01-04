import {React, StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { ListadoApp } from './ListadoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ListadoApp />
  </StrictMode>,
)

