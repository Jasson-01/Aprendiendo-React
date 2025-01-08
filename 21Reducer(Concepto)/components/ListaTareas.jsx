const initialState = [
  {
    id: 1,
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

const nuevaTarea = {
  id: 2,
  tarea: "Explicar useReduce",
  finalizada: false,
};

const agregarTarea = {
  type: "[TAREAS] Agregar tarea", // Esta es la accion
  payload: nuevaTarea,
};

const editarTarea = {
  type: "[TAREAS] editar tarea", // Esta es la accion
  payload: nuevaTarea,
};

const eliminarTarea = {
  type: "[TAREAS] eliminar tarea", // Esta es la accion
};

const borrarTarea = {
  type: "[TAREAS] borrar tarea", // Esta es la accion
};

const tareaReducer = (state = initialState, action = {}) => {
  //  una FORMA (usando if)
  //   if(action.type === "[TAREAS] Agregar tarea"){
  //       return [...state, action.payload]
  //   }

  //  otra FORMA (usando switch)
  switch (action.type) {
    case "[TAREAS] Agregar tarea":
      return [...state, action.payload];
    case "[TAREAS] Editar tarea":
    //return [...state, action.payload];
    case "[TAREAS] Eliminar tarea":
    //return [...state, action.payload];
    case "[TAREAS] Borrar Tareas":
      return [];
    default:
      break;
  }

  return state;
};

//tareaReducer(initialState,agregarTarea)
console.log(tareaReducer(initialState, agregarTarea));

export const ListaTareas = () => {
  return <div>ListaTareas</div>;
};
