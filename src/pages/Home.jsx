import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizza] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setPizza(data)
  };

  useEffect(() => {
  getData()
}, [])
  return (
    <main>
      <Header />

      <div className="cardContainer">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients}
            description={pizza.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
