import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './Card';

const Home = () => (
  <div>
    <h1>Inicio</h1>
    <Card
      title="Tarjeta 1"
      content="Contenido de la tarjeta 1"
      linkTo="/otro-lugar"
    />
    <Card
      title="Tarjeta 2"
      content="Contenido de la tarjeta 2"
      linkTo="/otra-pagina"
    />
  </div>
);

const OtherPage = () => (
  <div>
    <h1>Otro lugar</h1>
    <p>Contenido de otro lugar...</p>
  </div>
);

const AnotherPage = () => (
  <div>
    <h1>Otra página</h1>
    <p>Contenido de otra página...</p>
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/otro-lugar" component={OtherPage} />
      <Route path="/otra-pagina" component={AnotherPage} />
    </Switch>
  </Router>
);

export default App;
