import { useEffect, useState } from "react";

export const UserList = ({ endPoint }) => {
  // endpoint --> Es la parte final de la url

  const [data, setData] = useState([])   
     
  const fetchData  = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            // console.log(data)
            setData(data)
        } catch(error){
            console.error(error)
        }
  }

  useEffect ( () => {
     fetchData
  }, [endPoint])

  return (
    <>
      <ul>
        {endPoint = "users" ? data.map(item => <li key={item.id}>{item.name}</li>)
                            : data.map(item => <li key={item.id}>{item.body}</li>)} 
      </ul>
    </>
  );
};
