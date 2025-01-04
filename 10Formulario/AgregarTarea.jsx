import React from 'react'

export const AgregarTarea = () => {
   
   // Esto seria cuando escribimos en el cuadrito del input (que haya cambios)
   const [inputValue, setInputValue] = useState("")
   const onInputChange = (event) => {
        // console.log(event)
        setInputValue(event.target.value)
   }
   
   // Esto seria el "enter o click"
   const onSubmit = (event) => {
    event.preventDefault() // Este "preventDefault" es igual que javaScript
    console.log(inputValue)
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
