import { createContext, useState} from "react";

export const PizzasContext = createContext()
const url = "http://localhost:5000/api/pizzas";

const PizzasProvider = ({ children }) => {
const [pizzas, setPizza] = useState([]);

    const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPizza(data);
    };
   
    return (
        <PizzasContext.Provider value={{ pizzas, getData, setPizza }}>
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider