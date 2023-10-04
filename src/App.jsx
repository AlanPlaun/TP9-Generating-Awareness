import React from 'react';
import BasicExample from './components/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSolucionn from './components/CardSolucion';
import Figure from 'react-bootstrap/Figure';
import CardDonaciones from './components/CardDonaciones';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>

      <div>
        <div className='title'>
          <h1 className="main-title">URBAN LUXURY</h1>
          <h4 className="subtitle">Informate y ayuda a concientizar a otros</h4>
          <div>
            <Figure className="figure-container">
              <Figure.Image
                width={171}
                height={130}
                alt="171x180"
                src="https://images.vexels.com/media/users/3/296107/isolated/preview/87d9abb704822675875639924f9ede52-personaje-de-dibujos-animados-del-calentamiento-global-del-d-a-de-la-tierra.png"
              />
            </Figure>
          </div>
        </div>
        <div className="tercio" style={{ marginLeft: '2%' }}>
          <BasicExample />
        </div>
        <div className="tercio">
          <CardSolucionn />
        </div>
        <div className="tercio" style={{ marginRight: '2%' }}>
          <CardDonaciones />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
