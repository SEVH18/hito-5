import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


const Pizza = () => {
    const [pizza, setPizza] = useState({ ingredients : []});
    const url = "http://localhost:5000/api/pizzas/p001";


   
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setPizza(data)
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <div className="main-pizza-container">
      <div className="pizza-container">
        <img src={pizza.img} alt="" />
              <hr />
        <h2>{pizza.name}:</h2>
        <p className="description-pizza">{pizza.desc}</p>
        <h3>Precio: ${pizza.price}</h3>
        <ul className='prueba'>
          <h4>Ingredientes:</h4>
                  {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>))}
        </ul>
              <Button variant="dark">Añadir &#128722;</Button>
              <hr />
      </div>
    </div>
  );
}

export default Pizza
