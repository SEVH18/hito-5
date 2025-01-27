import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [requiredFieldsError, setErrorFields] = useState(false);
  const [passwordTooShort, setErrorPassword] = useState(false);
  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);
  const dataValue = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      setErrorFields(true);
      setErrorPassword(false);
      setPasswordsNotMatching(false);
      return;
    } else if (password.length <= 5 || passwordConfirm.length <= 5) {
      setErrorPassword(true);
      setErrorFields(false);
      setPasswordsNotMatching(false);
      return;
    } else if (password === passwordConfirm) {
      alert("Te registrado, correctamente");
    } else {
      setPasswordsNotMatching(true);
      setErrorFields(false);
      setErrorPassword(false);
    }
    setPasswordConfirm("");
    setErrorFields(false);
    setEmail("");
    setPassword("");
    setErrorPassword(false);
  };
  return (
    <div className="contenedorFormulario">
      <Form className="formulario" onSubmit={dataValue}>
        <h1>Register</h1>
        {passwordsNotMatching ? (
          <p className="error">Las constraseñas no coinciden</p>
        ) : null}
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Group>
        {
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
        }
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
