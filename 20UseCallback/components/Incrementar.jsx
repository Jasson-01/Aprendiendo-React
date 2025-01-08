import React from "react";
export const Incrementar = React.memo(({ incrementar }) => {
  console.log("Me estoy redibujando"); // Nosotros no queremos que se redibuje el "boton" por lo cual queremos calcular(queremos hacer una memorización de la funcion) y simplemente al estar memorizada simplemente mandamos información y no renderiza todo de nuevo.
  return <button onClick={() => incrementar(1)}>+1</button>;
});
