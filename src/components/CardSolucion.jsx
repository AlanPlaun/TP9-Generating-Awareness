import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './BasicExample.css'; // Agrega un archivo CSS para estilos personalizados

function CardSolucion() {
  return (
    <>
        

    <Card className="custom-card" id="caa">
      <div className="card-image">
        <Card.Img variant="top"  src="https://static.vecteezy.com/system/resources/previews/008/415/021/non_2x/global-warming-cartoon-style-illustration-with-planet-earth-in-a-melting-or-burning-state-and-image-sun-to-prevent-damage-to-nature-and-climate-change-vector.jpg" />
       
      </div>
      <Card.Body>
        <Card.Title className="card-title">Soluciones del calentamiento global</Card.Title>
        <Card.Text className="card-text">
        Posibles soluciones del cambio climatico.
        </Card.Text>
        <Link to={'/Soluciones'} className="custom-link">
          <button className="custom-button">Empezar</button>
        </Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardSolucion;


