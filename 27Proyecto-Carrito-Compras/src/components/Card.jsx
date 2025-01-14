import { useState } from "react";
import "../styles/card.css";

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {
  // Para saber si esta agregado o no esta agregado -> vamos a crear un useState para saber eso
  // comenzamos con "false" -> significa que no esta agregado
  const [added, setAdded] = useState(false);
  
  const clickAgregar = () => {
    handleAgregar()
    setAdded(true)
  }

  const clickQuitar = () => {
    handleQuitar()
    setAdded(false)
  }


  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="trajeta-precio">{precio}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="botton-agregar" onClick={clickAgregar}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
