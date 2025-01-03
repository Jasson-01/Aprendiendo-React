import React from "react";

// const Button  = () => {
//     <button>Soy un botón</button>
// }

/* NOTA: (PARAMETROS vs ARGUMENTOS)
La diferencia entre parámetros y argumentos en JavaScript se refiere a cómo se pasan valores a una función.

-Parámetros: Son los valores que se "esperan recibir" en una función cuando se la llama.
ejm: function suma(a, b) { ... }

-Argumentos: Son los valores que "se pasan" a una función cuando se la llama.
ejm: suma(3, 5)
*/

//----------------------------------- 1 ARGUMENTO

export const ContadorApp = ({value}) => {

  const handleClick = () => { // Es recomendable usar funcion flecha
    value += 1;
    console.log(value); // El event del click tiene un monton de informacion y lo podemos ver en consola.
  }

  return (
    <>
      <h1>Contador: </h1>
      <p>{value}</p>
      <Button onClick={handleClick}>
        Soy un Boton
      </Button>
      {/* <Button onClick={(event) => handleClick(event)}>Soy un Boton</Button>  */} segunda forma
    </>
  );
};

/*
//--------------------------------- 2 ARGUMENTOS A MAS

export const ContadorApp = () => {
    function handleClick(event, arg ,arg3) {
        console.log(event)
        console.log(arg)
        console.log(arg3)
    }
  
    return (
      <>
        <h1>Contador: </h1> 
        <Button onClick={(event) => handleClick(event, "otro argumento", "tercer argumento")}>
          Soy un Boton
        </Button>
      </>
    )
    
  }
*/
