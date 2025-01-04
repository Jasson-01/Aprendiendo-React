import {useEffect, useState} from "react"
import { UserList } from "./UserList"

export const UsersApp = () => {
 
  const [endPoint,setendPoint] = useState("users")
  
  const handleFetch = () => {
       setendPoint("comments")
  }
  
//Usamos useEffect para que solamente se cargue al comienzo del componente // --> El uso se da si solamente la dependencia cambia
//   useEffect(()=>{
//     fetchUsers()
//   },[])
  
  return (
    <>
        <h1>Lista de usuarios: </h1>
        <UserList endPoint={endPoint}></UserList> 
        <button onClick={handleFetch}>Aquí se llama a la API</button> 
    </>
  )
}

//---------------------------------- useEffect
/*
-Es un hook que nos va servir para que al hacer algo en el componente por ejemplo inicializarlo o una modificacion en una de las dependencias solamente se ejecute una vez despues.

-Se llama useEffect porque es un hook que es el efecto secundario de algo.



*/