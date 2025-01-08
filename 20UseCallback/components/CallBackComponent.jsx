import { useCallback, useState } from "react";
import { Incrementar } from "./Incrementar";

export const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = useCallback((val) => {
    setCounter((contador) => contador + val);
  }, []); // "contador es la variable que viene con setCounter"

  return (
    <>
      <h1>Contador: {counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};
