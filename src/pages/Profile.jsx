import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Profile = () => {
  return (
    <div className="profile">
      <div className="containerProfile">
        <h2>MI PERFIL:</h2>
        <Card style={{ width: "50%", margin: "100px" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Nombre: Pepito</ListGroup.Item>
            <ListGroup.Item>Apellido: Perez</ListGroup.Item>
            <ListGroup.Item>Correo: pepitoperez@gmail.com </ListGroup.Item>
          </ListGroup>
        </Card>
        <Button variant="dark">Cerrar sesión &#128274;</Button>
      </div>
    </div>
  );
}

export default Profile
