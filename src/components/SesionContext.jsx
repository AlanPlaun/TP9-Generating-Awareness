import React, { createContext, useState } from 'react';

export const ContextSesion = createContext();

const SesionProvider = (props) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')) || null);
    const [autenticado, setAutenticado] = useState(false);

    return (
        <ContextSesion.Provider value={{ usuario, setUsuario, autenticado, setAutenticado}}>
          {props.children}
        </ContextSesion.Provider>)
}

export default SesionProvider;