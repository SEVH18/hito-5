import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";
import PizzasProvider from "./context/PizzasContext";
function App() {
  return (
    <>
      <PizzasProvider>
         <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </CartProvider>
      </PizzasProvider>
      <Footer />
    </>
  );
}

export default App;
