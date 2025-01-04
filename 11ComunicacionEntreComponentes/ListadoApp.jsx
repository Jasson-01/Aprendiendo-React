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
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: false },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  // useStateSnippet (atajo de teclado) --> Usa este comando par generar un useState mas rapido
  const [arreglo, setArreglo] = useState(listadoSecciones); // setArreglo modifica el estado del padre
 
  // console.log(arreglo)


// NOTA:
// Las propiedades tambien pueden ser funciones
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>  // El hijo esta recibiendo el metodo para modificar el arreglo del padre
      <ol>
        {arreglo.map((elemento) => (
          <Item
            key={elemento.nombre}
            nombre={elemento.nombre}
            visto={elemento.visto}
          ></Item>
        ))}
      </ol>
    </>
  );
};
