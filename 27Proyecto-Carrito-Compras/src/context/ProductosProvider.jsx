import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  // Para usar el await ( Por que en el "useEffect" no se puede utilizar el await)
  // Haciendo esto "Ya tenemos los productos en "productos" del useState "
  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  // Para llamarlo apenas arranque
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{productos}}>
      {children}
    </ProductosContext.Provider>
  );
};
