import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Lo sentimos la ruta que buscas no existe &#128533; </h2>
      <h4>
        <Link to="/">&#127829;Vuelve al home</Link>
      </h4>
    </div>
  );
}

export default NotFound
