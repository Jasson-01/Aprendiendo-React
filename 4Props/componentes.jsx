import React from 'react'
import PropTypes from "prop-types"

export const Componentes = ( {titulo,subtitulo,parrafo2 = "Si no queremos usar `defaulProps` podemos inicializarlo acá"} ) => {
  console.log(titulo)
  console.log(subtitulo)

  return (
    <>
      <h1>{titulo} </h1>
      <h2>{subtitulo}</h2>
      <h2>{parrafo2}</h2>
    </>
  )
}

// Importamos PropTypes para hacer que el tipo de dato sea requerido! (Porque no estamos usando typeScript)
Componentes.PropTypes = {
   titulo: PropTypes.string.isRequired,
   subtitulo: PropTypes.number.isRequired
}

// Si no le mandamos propiedades al padre (main.jsx), podemos usar "defaultProps" para mandar propiedades por defecto
Componentes.defaultProps = {
   parrafo : "Aprendiendo react",
   frase: "Luna llena"
}