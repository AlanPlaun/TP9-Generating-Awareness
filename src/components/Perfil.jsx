import React, { useContext, useState } from "react";
import { ContextSesion } from "./SesionContext";
import { Link } from "react-router-dom";

const Perfil = () => {
  const { usuario } = useContext(ContextSesion);
  const { setAutenticado } = useContext(ContextSesion);
  const [loggedOut, setLoggedOut] = useState(false);

  const logOut = () => {
    console.log("cerrado")
    setAutenticado(false);
    setLoggedOut(true);
  };

  return (
    <div className="card">
      <h1>Tu perfil</h1>
      <div className="form-group">
        <br />
        <h4>Nombre de usuario: {usuario}</h4>
        <br />
          <Link to="/" className="link">
            <button onClick={logOut} type="submit" className="btn btn-primary btn-lg">Cerrar sesión</button>
          </Link>
      </div>
    </div>
  );
};

export default Perfil;