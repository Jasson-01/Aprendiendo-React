import React, { useContext } from "react";
import { useForm } from "./hooks/useForm";
import { UsuarioContext } from "./context/UsuarioContext";

export const LoginScreen = () => {
  const initialForm = {
    nombre: "",
    tecnologia: "",
    email: "",
    redes: "",
  };

  const { formState, nombre, tecnologia, email, redes, onInputChange } =
    useForm(initialForm);

  const { setUsuario } = useContext(UsuarioContext);

  onSubmit = (e) => {
    e.preventDefault(); // Para que no se actualize la pagina
    setUsuario(formState);
  };

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">
            Tecnologia
          </label>
          <input
            type="text"
            className="form-control"
            id="tecnologia"
            value={tecnologia}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="redes" className="form-label">
            Redes
          </label>
          <input
            type="text"
            className="form-control"
            id="redes"
            value={redes}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </>
  );
};
