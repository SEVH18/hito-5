import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requiredFieldsError, setErrorFields] = useState(false);
  const [passwordTooShort, setErrorPassword] = useState(false);
  const dataValue = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorFields(true);
      setErrorPassword(false);
      return;
    } else if (password.length <= 5) {
      setErrorPassword(true);
      setErrorFields(false);
      return;
    } else {
      alert("Te has logueado correctamente");
    }
    setErrorFields(false);
    setEmail("");
    setPassword("");
    setErrorPassword(false);
  };
  return (
    <div className="contenedorFormulario">
      <Form className="formulario" onSubmit={dataValue}>
        <h1>Login</h1>
        {requiredFieldsError ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        {passwordTooShort ? (
          <p className="error">La contraseña debe tener minimo 6 caracteres</p>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage;
