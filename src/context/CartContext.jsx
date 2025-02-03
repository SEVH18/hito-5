import {createContext, useContext, useEffect, useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartPizzas, setPizza] = useState(pizzaCart)



    //SUMAR UNIDADES
      const agregarUnidad = (id) => {
        setPizza((contadorSuma) =>
          contadorSuma.map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
          )
        );
    };
    //RESTAR Y ELIMINAR
    const restarUnidad = (id) => {
      setPizza((contadorResta) =>
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

    return (
        <CartContext.Provider value={{cartPizzas, setPizza, agregarUnidad, restarUnidad, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider