import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";



function CardPizza({ name, price, ingredients, img, description }) {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <h4>Descripción:</h4>
            <p className="description">&#127829;{description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4>&#127829;Ingredientes:</h4>
            <ul className="ingredients">
              <li>{ingredients[0]}</li>
              <li>{ingredients[1]}</li>
              <li>{ingredients[2]}</li>
              <li>{ingredients[3]}</li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <h3>Precio: ${price}</h3>
          <div className="containerButtons">
            <Button variant="secondary">Ver más &#128064;</Button>
            <Button variant="dark">Añadir &#128722;</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;
