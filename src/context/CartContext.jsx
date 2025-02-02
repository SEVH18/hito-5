import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()
const url = "http://localhost:5000/api/pizzas";

const CartProvider = ({children}) => {
const [pizzas, setPizza] = useState([]);

    const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPizza(data);
    };
   
    return (
        <CartContext.Provider value={{ pizzas, getData }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider