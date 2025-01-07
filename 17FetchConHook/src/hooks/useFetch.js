import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }

    //PARA LLAMAR A UNA FUNCION ASINCRONA USAMOS:
    useEffect(() => {
      if (!url) return;
      getFetch();
    }, [url]);
  };

  return data, isLoading, errors;
};
