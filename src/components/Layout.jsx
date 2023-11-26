import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextSesion } from "./SesionContext";

const Layout = () => {
    const {autenticado} = useContext(ContextSesion);
    if (autenticado === true)
    {
        return(
            <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to={'/'} className='nav-link'><h3>Home</h3></Link>
                    <Link to={'/informacion'} className='nav-link'><h3>+Info</h3></Link>
                    <Link to={'/perfil'} className='nav-link'><h3>Perfil</h3></Link>
                </nav>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </React.Fragment>
        )
    }
    else {
        return (
        <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to={'/'} className='nav-link'><h3>Home</h3></Link>
                    <Link to={'/informacion'} className='nav-link'><h3>+Info</h3></Link>
                    <Link to={'/sesion'} className='nav-link'><h3>Iniciar Sesion</h3></Link>
                </nav>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </React.Fragment>
        )
    }

}

export default Layout