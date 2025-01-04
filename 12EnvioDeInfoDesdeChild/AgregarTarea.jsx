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
       event.preventDefault()
       agregarTarea(inputValue) 
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

// En este caso estamos haciendo que el padre se haga responsable que se agregue un elemento a su lista, y que el hijo(input) solo se ocupe de mandar un string(en este caso) y el padre resuelve el resto(lo que haremos con logica).