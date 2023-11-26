import React, { useContext, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextSesion } from "./SesionContext";

function Sesion() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(ContextSesion);

    const CambiarUsername = (e) => {
        setUsername(e.target.value);
      };

      const CambiarContrasena = (e) => {
        setPassword(e.target.value);
      };

    const Submit = (e) => {
        e.preventDefault();
        context.setUsuario(username);
        localStorage.setItem('usuario', JSON.stringify(username));
        context.setAutenticado(true);
        navigate('/');
    };

    return (
        <div className="card">
            <h2>Iniciar sesión</h2>
            <form onSubmit={Submit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={CambiarUsername}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={CambiarContrasena}
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}

export default Sesion;
