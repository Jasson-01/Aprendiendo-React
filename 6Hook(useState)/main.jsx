import {React, StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { ContadorApp } from './ContadorApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContadorApp value={0}/>
 
  </StrictMode>,
)

//Props (Propiedades)

// Son un mecanismo para pasar información de un componente padre a un componente hijo, son objetos que tienen valores que nos permiten la comunicación entre ccomponentes.





