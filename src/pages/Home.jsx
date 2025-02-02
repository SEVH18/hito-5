import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
 const {pizzas, getData} = useContext(CartContext)
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
