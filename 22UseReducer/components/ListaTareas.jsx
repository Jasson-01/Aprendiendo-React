import { useForm } from "../hooks/useForm";

const initialState = [
  {
    id: new Date().getDate(),
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

//const editarTarea = {
//  type: "[TAREAS] editar tarea", // Esta es la accion
//  payload: nuevaTarea,
//};

//const eliminarTarea = {
//  type: "[TAREAS] eliminar tarea", // Esta es la accion
//};

//const borrarTarea = {
//  type: "[TAREAS] borrar tarea", // Esta es la accion
//};

const tareaReducer = (state = initialState, action = {}) => {
  //  una FORMA (usando if)
  //   if(action.type === "[TAREAS] Agregar tarea"){
  //       return [...state, action.payload]
  //   }

  //  otra FORMA (usando switch)
  switch (action.type) {
    case "[TAREAS] Agregar tarea":
      return [...state, action.payload];

    case "[TAREAS] Finalizar tarea":
      //  console.log("Finalizar");
      //return [...state, action.payload];
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });

    case "[TAREAS] Eliminar tarea":
      return state.filter((tarea) => tarea.id !== action.payload);
    // console.log("eliminar");
    //return [...state, action.payload];

    case "[TAREAS] Borrar Tareas":
      //  console.log("borrar todo");
      return [];

    default:
      return state;
  }

  return state;
};

export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea == "") return;
    console.log(formState);

    const action = {
      type: "[TAREAS] Agregar tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = ({ id }) => {
    // console.log(id)
    // console.log(finalizada)
    // console.log(tarea)

    const action = {
      type: "[TAREAS] Finalizar tarea",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const reset = () => {
    const action = {
      type: "[TAREAS] Borrar Tareas",
      payload: "",
    };
    dispatch(action);
  };

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            name="tarea"
            placeholder="Ingresar tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={reset}>
          Reset
        </button>
      </form>
      <hr />
      <ul className="list-group">
        {tareasState.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <pan>{item.tarea}</pan>
              <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(item)}
                >
                  Borrar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
