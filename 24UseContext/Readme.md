# UseContext()

- Nos sirve para poder poder consumir informacion, que nos provee una capa externa. 

useContext en React: es una función de React que permite compartir estados entre componentes sin pasar propiedades de componente en componente.

Con useContext, puedes acceder a un contexto (un objeto con estado y funciones) creado con React.createContext. Esto te permite compartir datos entre componentes anidados sin tener que pasar propiedades de padre a hijo.

Recuerda que debes crear el contexto con "React.createContext" antes de usar useContext.