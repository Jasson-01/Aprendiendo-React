import  "./Componentes.css" // Los imports siempre se ponen primero

// Es recomendable que las variables esten afuera de las componentes


// --------------------- FORMA RECOMENDADA
// racf -> atajo de teclado

import React from 'react'

export const Componentes = () => {
  return (
    <div>Hola Mundo!</div>
  )
}

// --------------------------2da FORMA

// function Componente2() {
//     return (<h1>Hola Mundo!</h1>);
// }

// export default Componente2;


// --------------------------3da FORMA (version clase) (Version antigua)

// class Componente3 extends Component {
//     state = {  } 
//     render() { 
//         return ();
//     }
// }
 
// export default Componente3 ;
