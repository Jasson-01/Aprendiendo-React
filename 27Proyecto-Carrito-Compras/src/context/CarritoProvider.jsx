import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  // El reducer es una funcion comun y corriente
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar Compra":
        return [...state, action.payload];

      case "[CARRITO] Aumentar Cantidad Compra": // TO DO : Agregar cantidad y modificar
        return state.map((item) => {
          const cant = item.cantidad + 1;
          //Si el "id" coincide con el "payload" devuelve el "spreed item(Todas las cosas que tiene el item)", pero a la cantidad se le suma 1
          if (item.id === action.payload) return { ...item, cantidad: cant };
          // En caso de que no cumpla el "if"
          return item
        });

      case "[CARRITO] Disminuir Cantidad Compra": // TO DO : Agregar cantidad y modificar
        const cant = item.cantidad - 1;
        //Si el "id" coincide con el "payload" devuelve el "spreed item(Todas las cosas que tiene el item)", pero a la cantidad se le  resta 1
        if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant };
        return item 
      case "[CARRITO] Eliminar Compra":
        // Usando "filter()" devolvera todas las compras que sean distintas al "id" que mandamos
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };
  // Para definir la lista de compras
  /*
  dispatch -> Para mandar la accion y el payload
  comprasReducer -> Es el reducer que queremos pasar, para cuales son las acciones audicer 
  */
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  // ARMANDO LAS ACCIONESS
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// Acá vamos agregando toda la información que vamos agregando al carrito
// Osea toda la informacion que vamos comprando
