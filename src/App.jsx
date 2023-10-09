import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Causas from "./components/Causas";
import Soluciones from "./components/Soluciones";
import Donaciones from "./components/Donaciones";
import Login from "./components/Login";
import UsuarioProvider from "./context/UserContext";

function App() {
  return (
    <React.Fragment>
      <UsuarioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Layout />}>
              {" "}
              {/* Esta siempre */}
              <Route index element={<Home />}></Route> {/* Index */}
              <Route path="/Causas" element={<Causas />}></Route>
              <Route path="/Soluciones" element={<Soluciones />}></Route>
              <Route path="/Donaciones" element={<Donaciones />}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UsuarioProvider>
    </React.Fragment>
  );
}

export default App;
