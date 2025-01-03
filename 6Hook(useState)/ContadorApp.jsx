import React from "react";
import { useState } from "react";

// ------------------------------------  HOOK 
/*
Es una "funcion especial" que nos permite utilizar una funcion de react en un "componente de tipo funcion".
Hay do formas:

1) Los propios de react --> useState, useEffect, useMemo, useCallback, etc.

2) y Nosotros tambien podemos hacer los nuestros (Custom Hooks):

 Los custom hooks son funciones personalizadas que se utilizan para reutilizar código y crear componentes funcionales con estado y efectos. Se crean utilizando los hooks de React, como "useState" y "useEffect", y se utilizan para encapsular lógica compleja en una función fácil de reutilizar.

Ventajas de los custom hooks:

*Reutilizar código en diferentes componentes.
*Mantener la lógica compleja separada de la lógica de presentación.
*Aumentar la reutilización de código y reducir la duplicación.
*Mejorar la legibilidad y mantenibilidad del código.

*/


// ------------------------------------  ESTADO
/*
-El estado en React es un objeto que contine datos y representa la informacion que una interfaz de usuario necesita para poder renderizarse y funcionar correctamente.

-El estado es mutable y tiene todos los datos que necesita un componente para funcionar de forma correcta y mutar si es lo que necesita,
      (a travez de hooks en el caso de los funcional components),
      (o el constructor en el caso de los componentes de tipo clase),
uno puede ir modificando este estado y react de forma inteligente solamente modificara la parte del componente que ha interactuado con el usuario.
*/


//----------------------------------- 1 ARGUMENTO

export const ContadorApp = ({value}) => {
        // nombre de la variable -> contador
        // setContador -> Es el metodo con el cual se modificara la constante(la variable)
  const [contador, setContador] = useState(value) 
   
  const handleClick = () => { 
    setContador(contador + 1)
  }

  return (
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <Button onClick={handleClick}>
        Soy un Boton
      </Button>
     
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
