import React from 'react'

export const AgregarTarea = ({agregarTarea}) => {
   
   // Esto seria cuando escribimos en el cuadrito del input (que haya cambios)
   const [inputValue, setInputValue] = useState("")
   const onInputChange = (event) => {
        // console.log(event)
        setInputValue(event.target.value)
   }
   
   // Esto seria el "enter o click"
   const onSubmit = (event) => {
    const envio = {
       nombre : inputValue,
       visto: false
    }
    event.preventDefault() // Este "preventDefault" es igual que javaScript
    agregarTarea(tareas => [...tareas, envio])
    // console.log(inputValue)
   }

  return (
  <form onSubmit={onSubmit}>
     <input
      type='text' // Son como atributos en HTML
      placeholder='Ingresa tarea nueva'
      value={inputValue}
      onChange={onInputChange} // "onChange" --> Es un escuchador de eventos de cambio
     />
   </form>
  )
}

// NOTA:
// Las propiedades tambien pueden ser funciones