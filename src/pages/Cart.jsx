import React from 'react'
import Button from "react-bootstrap/Button";
import { useContext} from 'react';
import { CartContext } from '../context/CartContext';
const Cart = () => {
  
  const {cartPizzas, total, agregarUnidad, restarUnidad} = useContext(CartContext)

  
  return(
    <div className='container-cards-carro'>
      <h2>Carrito de Compras</h2>
      {cartPizzas.map(pizza => 
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
