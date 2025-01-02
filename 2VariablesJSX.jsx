import React from 'react'

const string = "Esto es un texto"
const number = 12345
const array = ["uno","dos",3,4]
const boolean  = true
const funcion = () => 1+1
const objeto = {nombre: "Curso de JavaScript", duracion:4}
const fecha = new Date()


// Veamos como llamamos a las variables:
export const componente1 = () => {
  return (
    // <div>{}</div>    // ---> Dentro de las llaves podemos hacer codigo de javaScript
    // <p>{ string }</p>
    // <p>{ number }</p>  
    // <p>{ array }</p>
    // <p>{ boolean }</p>  // ---> React no escribe los booleanos como un string
    // <p>{ funcion() }</p>   // ----> Debemos poner los parentesis para poder ejecutar la funcion 
    // <p>{ JSON.stringify(objeto) }</p> // ---> Si queremos que se muestre un objeto usamos JSON.stringify()
    <p>{ JSON.stringify(fecha) }</p> // ---> Si queremos que se muestre un objeto usamos JSON.stringify()

  )
}
