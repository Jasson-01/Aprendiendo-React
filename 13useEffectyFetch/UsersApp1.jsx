import {useEffect, useState} from "react"

export const UsersApp = () => {
 
  const [users, setUsers] = useState([])   
     
  const fetchUsers  = async() => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            // console.log(data)
            setUsers(data)
        } catch(error){
            console.error(error)
        }
  }   
  
// vamos al caso donde apretamos un boton y hagamos la llamada, en este caso el useEffect no se usaria por eso esta comentado
  const handleFetch = () => {
    fetchUsers()
  }

  //Usamos useEffect para que solamente se cargue al comienzo del componente // --> El uso se da si solamente la dependencia cambia.

  // useEffect(()=>{
  //   fetchUsers()
  // },[])
  
  return (
    <>
        <h1>Lista de usuarios: </h1>
        <ul>
            {users.map(user => <li key={user.id}>Nombre: {user.name} Email: {user.email}</li>)}
        </ul>   

        <button onClick={handleFetch}>Aquí se llama a la API</button> 
    </>
  )
}


//---------------------------------- useEffect
/*
-Es un hook que nos va servir para que al hacer algo en el componente por ejemplo inicializarlo o una modificacion en una de las dependencias solamente se ejecute una vez despues.

-Se llama useEffect porque es un hook que es el efecto secundario de algo.



*/