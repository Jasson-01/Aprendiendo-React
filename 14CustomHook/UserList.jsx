import { useEffect, useState } from "react";
import { useFetchData } from "./Hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  // endpoint --> Es la parte final de la url
  const {data, isLoading} = useFetchData(endPoint)

  return (
    <>
      <ul>
        {isLoading 
             ? <p>Cargando</p> 
             : endPoint = "users" ? data.map(item => <li key={item.id}>{item.name}</li>)
                                  : data.map(item => <li key={item.id}>{item.body}</li>)
        } 
      </ul>
    </>
  );
};
