## Reducer

- Tiene su propio Hook -> useReduce
- Se puede utilizar en "redux", que es muy importante para manejar estados generales en estados muy grandes.

Un reducer es una funcion común y corriente que recibe un estado inicial,hace una accion para generar algun cambio y devuelve un estado modificado.

Sirve simplemente para hacer modificaciones puntualmente en el objeto del estado.

Sirve para centralizar toda logica de negocio en un solo lado (en un reducer), va a tener toda la logica del estado, puntualmente de las tareas.

Tiene que cumplir ciertas normas:

- No puede hacer acciones dentro asincronas
- No puede setear el "local storage" o el "session storage"
