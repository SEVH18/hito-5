import {createContext, useContext, useEffect, useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartPizzas, setCartPizza] = useState([])



    //SUMAR UNIDADES
      const agregarUnidad = (id) => {
        setCartPizza((contadorSuma) =>
          contadorSuma.map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
          )
        );
    };
    //RESTAR Y ELIMINAR
    const restarUnidad = (id) => {
      setCartPizza((contadorResta) =>
        contadorResta
          .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
          )
          .filter((pizza) => pizza.count > 0)
      );
    };
//TOTAL
      const total = cartPizzas.reduce(
        (valorInicial, pizza) => valorInicial + pizza.price * pizza.count,
        0
  );
  
  const addPizzaToCart = (pizza) => {
    setCartPizza((prevCartPizza) => {
      const searchPizza = prevCartPizza.find((p) => p.id === pizza.id)
      if (searchPizza) { 
        return prevCartPizza.map((p) => p.id === pizza.id ? {...p, count: p.count +1 } : p ) 
      } else {
        return [...prevCartPizza,{...pizza, count: 1}]
      }
      } )
  }

    return (
        <CartContext.Provider value={{cartPizzas, setCartPizza, agregarUnidad, restarUnidad, total, addPizzaToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider