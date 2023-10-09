import React from 'react';
import { Link, Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to = {'/'} className='nav-link'>Home</Link>
                    <Link to = {'/Causas'} className='nav-link'>Causas</Link>
                    <Link to = {'/Soluciones'} className='nav-link'>Soluciones</Link>
                    <Link to = {'/Donaciones'} className='nav-link'>Donaciones</Link>
                    <Link to = {'/Login'} className='nav-link'>Login</Link>
                </nav>
            </div>
            <div className= 'content'>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default Layout;