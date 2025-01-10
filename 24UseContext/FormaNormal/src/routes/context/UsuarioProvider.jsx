import React from 'react'
import { UsuarioContext } from './UsuarioContext'



const usuario = { // Es un objeto!
    nombre: "jason",
    tecnologia : "React",
    mail: "JSON007@gmail.com",
    redes: "@Yeko"
}

export const UsuarioProvider = ({ children }) => {
  return (
     <UsuarioContext.Provider value={ {usuario} }>
        {children}
     </UsuarioContext.Provider>
  )
}
