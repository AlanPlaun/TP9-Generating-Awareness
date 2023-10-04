import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './BasicExample.css'; // Agrega un archivo CSS para estilos personalizados


function  BasicExample() {
  return (
    <React.Fragment>
        <Card className="custom-card" id="caa">
      <div className="card-image">
        <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/ilustracion-contaminaciones-tierra_1308-39766.jpg" alt="Imagen relacionada al calentamiento global" />
      </div>
      <Card.Body>
        <Card.Title className="card-title">Causas del Calentamiento Global</Card.Title>
        <Card.Text className="card-text">
          Infórmate sobre las principales causas del calentamiento global.
        </Card.Text>
        <Link to={'/causas'} className="custom-link">
          <button className="custom-button">Empezar</button>
        </Link>
      </Card.Body>
    </Card>
    </React.Fragment>

    
  );
}

export default BasicExample;
