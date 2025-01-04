import React from "react";
import { AgregarTarea } from "./AgregarTarea";

// ---------------------------------------- TERNARIOS

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? ";D" : "C"} // 1ERA forma
      {visto && "C"} // 2da forma ("Si visto===true(cumple la primera condición)
      sigue a la siguiente condicion, en otro caso sale de la condicion")
    </li> // visto no va a aparecer en pantalla porque es un booleano
  );
};

export const ListadoApp = () => {
  
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: false }]);
  };

  let listadoSecciones = [
    {id: 0, nombre: "Instalaciones necesarias", visto: true },
    {id: 1, nombre: "Uso de Vite", visto: true },
    {id: 2, nombre: "Componentes", visto: true },
    {id: 3, nombre: "Variables en JSX", visto: true },
    {id: 4, nombre: "Props", visto: true },
    {id: 5, nombre: "Eventos", visto: true },
    {id: 6, nombre: "useState", visto: false },
    {id: 7, nombre: "Redux", visto: false },
    {id: 8, nombre: "customHooks", visto: false },
  ];
  // useStateSnippet (atajo de teclado) --> Usa este comando par generar un useState mas rapido
  const [arreglo, setArreglo] = useState(listadoSecciones); // setArreglo modifica el estado del padre
 

  const onAgregarTarea = (val) => {
    
    let valor = val.trim() // Para que borre espacio alcomienzo y al final
    if (val < 1) return // Con esto sale del metodo (Con esto aseguramos que el valor sea de almenos un caracter)


    //  console.log(val)
    const envio = { 
       id: arreglo.length, // Se usa length porque siempre la longitud cuenta desde 0, pero si el id comenzara desde 1 cambiaria la expresion entonces seria --> (arreglo.length + 1) , depende del contexto, Ojo.
       nombre: val,
       visto: false 
    }
    setArreglo([...arreglo, envio])    
  }


// NOTA:
// Las propiedades tambien pueden ser funciones
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>  // El hijo esta recibiendo el metodo para modificar el arreglo del padre
      <ol>
        {arreglo.map((elemento) => (
          <Item
            key={elemento.id}
            nombre={elemento.nombre}
            visto={elemento.visto}
          ></Item>
        ))}
      </ol>
    </>
  );
};
