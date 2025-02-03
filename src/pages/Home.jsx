import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useEffect} from "react";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const { pizzas, getData } = useContext(PizzasContext)
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
