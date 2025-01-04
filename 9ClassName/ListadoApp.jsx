import React from "react";

// ---------------------------------------- TERNARIOS

const Item = ({ nombre, visto }) => {
  return (
    <li className="Rojito">
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
  const [arreglo, setArreglo] = useState(listadoSecciones);

  // console.log(arreglo)

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        {arreglo.map((elemento) => (
          <Item
            key={elemento.nombre}
            nombre={elemento.nombre}
            visto={elemento.visto}
          ></Item>
        ))}
      </ol>

      {/* // Como agregamos un elemento a la lista ? */}
      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};

// ------------------------------------------------ Atomic Design
/*
- De apoco vamos formanto componentes mas pequeños
- Es un enfoque de diseño de "interfazes de usuarios" la cual se basa en  creacion y organizacion de componentes reutilizables, la idea de Atomic Designe es justamente hacer componentes muy pequeños indivisibles como botones, inputs,etc e ir haciendo moleculas y luego organismos, etc y construyendo la interfaz de usuario desde lo mas chiquito hacia lo mas grande tratando de reutilizar lo maximo posible los componentes minimos.
*/
