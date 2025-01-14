import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  
  return (

    // Todo debe estar dentro de un fractal para que sea un solo padre
    <ProductosProvider>
      <CarritoProvider> 
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage/>}></Route>
            <Route
              path="/carrito"
              element={<CarritoPage></CarritoPage>}
            ></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};

// En <CarritoProvider> -> El "producto" va a estar disponible para el "carrito", pero el "carrito" para el "producto" NO 