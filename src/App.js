import Carrousel from './components/Carrousel';
import Layout from './components/Layout'
import Home from './components/Home';
import Informacion from './components/Informacion';
import Sesion from './components/Sesion';
import Perfil from './components/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Asegúrate de importar los componentes necesarios para el enrutamiento
import SesionProvider from './components/SesionContext';

function App() {
  return (
    <SesionProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}> {/* Esta siempre */}
            <Route index element={<Home />}></Route> {/* Index */}
            <Route path='/informacion' element={<Informacion />} ></Route>
            <Route path='/sesion' element={<Sesion />} ></Route>
            <Route path='/perfil' element={<Perfil />} ></Route>
            <Route path='*' element={<h1>Not Found</h1>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SesionProvider>
  );
}

export default App;
