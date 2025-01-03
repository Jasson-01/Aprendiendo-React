import {React, StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { Componentes } from './componentes'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Componentes titulo="Esta seccion es de props" subtitulo="Este es un curso de React"/>
 
  </StrictMode>,
)

//Props (Propiedades)

// Son un mecanismo para pasar información de un componente padre a un componente hijo, son objetos que tienen valores que nos permiten la comunicación entre ccomponentes.





