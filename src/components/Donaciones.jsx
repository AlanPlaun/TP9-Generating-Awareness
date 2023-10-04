import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Donaciones.css';

function Donaciones() {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donationConfirmed, setDonationConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (donationConfirmed) {
      setTimeout(() => {
        setDonationConfirmed(false);
      }, 3000); // Cambia la duración de la animación (en milisegundos)
    }
  }, [donationConfirmed]);

  const handleDonation = () => {
    if (!donationAmount || !name || !email) {
      setShowError(true);
    } else {
      setDonationConfirmed(true);
      setShowError(false);
    }
  };

  return (
    <div id='container'>
      <div id='form-box'>
        {!donationConfirmed ? (
          <React.Fragment>
            <h2 className="header">Ayuda al Planeta</h2>
            <p className="subheader">Juntos podemos combatir el calentamiento global.</p>
            <Form>
              <Form.Group controlId="donationAmount">
                <Form.Control
                  id='holder'
                  type="number"
                  placeholder="Monto de la donación"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Control
                  id='holder'
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  id='holder'
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" className="custom-button" id='boton' onClick={handleDonation}>
                Confirmar Donación
              </Button>
            </Form>
            {showError && (
              <Alert variant="danger" id='err'>
                Por favor, completa todos los campos antes de confirmar la donación.
              </Alert>
            )}
          </React.Fragment>
        ) : (
          <div className="confirmation-animation">
            <p>Pago recibido. ¡Gracias por tu donación!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donaciones;
