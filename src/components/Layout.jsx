import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextSesion } from "./SesionContext";

const Layout = () => {
    const autenticado = useContext(ContextSesion)
    if (autenticado === true) {
        return (
            <React.Fragment>
                <div>
                    <nav className='navbar'>
                        <Link to={'/'} className='nav-link'>Home</Link>
                        <Link to={'/informacion'} className='nav-link'>Informacion</Link>
                        <Link to={'/sesion'} className='nav-link'>Iniciar Sesion</Link>
                    </nav>
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </React.Fragment>)
    }
    else {
        return (
            <React.Fragment>
                <div>
                    <nav className='navbar'>
                        <Link to={'/'} className='nav-link'>Home</Link>
                        <Link to={'/informacion'} className='nav-link'>Informacion</Link>
                        <Link to={'/perfil'} className='nav-link'>Perfil</Link>
                    </nav>
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </React.Fragment>)
    }
}

export default Layout