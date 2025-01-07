## useMemo

- useMemo() nos va a salvar mucho cuando se redibuje el componente y no querramos que se vuelvan a llamar los metodos que utilizen "mucho recurso" de la computadora, ejm: calculos pesados, API's,etc
- Se usa para memorizar algunos fragmentos de los metodos y no repetir, salvo que cambie uno de las dependencias