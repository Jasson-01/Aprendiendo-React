import { useState } from "react";
import { fetchData } from "./helpers/fetchData";

export const useFetchData = ({ endPoint }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data, isLoading } = await fetchData(endPoint);
    setData(data);
    setIsLoading(isLoading);
  };

  useEffect(() => { // Aca no se puede usar, porque useEffect es ASINCRONO, por eso lo hacemos afuera
    getData();
  }, [endPoint]);

  /*----------- 2DA FORMA
  useEffect(() => {
    fetchData(endPoint).then((res) => {
      setData(ResizeObserver.data);
      setIsLoading(res.isLoading);
    });
  }, [endPoint]);
*/
  return {
    data,
    isLoading,
  };
};
