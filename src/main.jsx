import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from '@remix-run/router'
import Layout from './components/Layout';
import Causas from './components/Causas.jsx'
import Soluciones from './components/Soluciones.jsx'
import Donaciones from './components/Donaciones.jsx'


const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <React.StrictMode>
  <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />}></Route>
	    <Route path="/Causas" element={<Causas />}></Route>
	    <Route path="/Soluciones" element={<Soluciones/>}></Route>
      <Route path="/Donaciones" element={<Donaciones />}></Route>
       </Routes>
     </BrowserRouter>
  </React.StrictMode>
</>
  )
  


