import React from 'react'

// ---------------------------------------- TERNARIOS

const Items = ({nombre,visto}) => {
    return(
        <li>{nombre}
        {visto ? ";D" : "C"} // 1ERA forma 
        {visto && "C"} // 2da forma ("Si visto===true(cumple la primera condición) sigue a la siguiente condicion, en otro caso sale de la condicion")
        </li> // visto no va a aparecer en pantalla porque es un booleano
    )  
}

export const ListadoApp = () => {
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        <Items nombre="Instalaciones necesarias" visto={true}></Items>
        <Items nombre="Uso de Vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables en JSX" visto={true}></Items>
        <Items nombre="Props" visto={true}></Items>
        <Items nombre="Eventos" visto={true}></Items>
        <Items nombre="useState" visto={false}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="customHooks" visto={false}></Items>
      </ol>
    </>
  )
}











