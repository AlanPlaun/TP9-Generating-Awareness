import React from "react";
import Login from "./Components/Login";
import './LoginDiseno.css';
import Layout from "./Components/Layout"

const LoginPage = () => {
    return (
        
        <React.Fragment>
            <Layout />
            <Login />
        </React.Fragment>
    )
}

export default LoginPage;