import React from 'react'
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { pizzaCart } from '../assets/js/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)
  
  //Aumentar cantidades
   const agregarUnidad = (id) => {
     setCart((contadorSuma) =>
       contadorSuma.map((pizza) =>
         pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
       )
     );
   };

//Disminuir y eliminar
  const restarUnidad = (id) => {
    setCart((contadorResta) =>
      contadorResta.map((pizza) => pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza) 
      .filter((pizza) => pizza.count > 0)
    ) 
  }
//Total
  const total = cart.reduce((valorInicial, pizza) => valorInicial + pizza.price * pizza.count, 0)
  
  return(
    <div className='container-cards-carro'>
      <h2>Carrito de Compras</h2>
      {cart.map(pizza => 
          <div className='cards-carro' key={pizza.id}><img src={pizza.img} alt={pizza.name} className='img-carro' />
            <h4>{pizza.name}</h4>
          <p>Precio unitario: ${pizza.price}</p>
          <p>Cantidad:{pizza.count}</p>
            <Button variant='danger' onClick={() => restarUnidad(pizza.id)}>-</Button>
            <span>{pizza.count}</span>
            <Button onClick={() => agregarUnidad(pizza.id)}>+</Button>
          </div>
          
         
           )
        }
     
      <h2>Total: ${total.toLocaleString()}</h2>
      <Button variant='dark'>Pagar</Button>
   </div>
  );
}

export default Cart
