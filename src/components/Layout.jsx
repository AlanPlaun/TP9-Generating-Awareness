import React from 'react';
import { Link, Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to = {'/Home'} className='nav-link'>Causas</Link>
                    <Link to = {'/Causas'} className='nav-link'>Causas</Link>
                    <Link to = {'/Soluciones'} className='nav-link'>Soluciones</Link>
                    <Link to = {'/Donaciones'} className='nav-link'>Donaciones</Link>
                </nav>
            </div>
            <div className= 'content'>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default Layout;