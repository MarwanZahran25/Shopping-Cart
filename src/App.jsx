import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [cartIds, setCartIds] = useState([]);
  return (
    <div className="relative min-h-screen">
      <Navbar products={cart.length} />
      <Outlet context={[cart, setCart, cartIds, setCartIds]} />
      <Footer />
    </div>
  );
}

export default App;
