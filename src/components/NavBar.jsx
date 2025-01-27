import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navBar">
      <div className="containerNav">
        <h5 className="tituloNav">Tiago's Pizzas</h5>
        <Link to="/">
          <Button variant="outline-light">&#127829;Home</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline-light">
            {token == false ? <>Login &#128272;</> : <>Profile &#128275;</>}
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="outline-light">
            {token == false ? <>Register &#128272;</> : <>Logout &#128274;</>}
          </Button>
        </Link>
        <Link to="/profile">
          <Button variant="outline-light">&#129489;Perfil</Button>
        </Link>
      </div>
      <Link to="/cart">
        <Button variant="outline-primary">
          &#128722;Total: {total.toLocaleString()}
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar
