import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {Componente1, Componente2, componentes} from "./componentes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <componentes />
    <Componente1 />
    <Componente2 />
  </StrictMode>
);
