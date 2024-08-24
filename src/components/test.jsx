import { useState, useEffect } from "react";
import Cartproduct from "./Cartproduct";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useOutletContext(); // Get cart data from context

  const [cartItems, setCartItems] = useState(
    cart.map((item) => ({ ...item, quantity: item.quantity || 1 })) // Use existing quantity or default to 1
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  }, [cartItems]); // Dependency on cartItems

  const handleMinus = (index) => {
    setCartItems((current) =>
      current.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handlePlus = (index) => {
    setCartItems((current) =>
      current.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeClick = (index) => {
    setCartItems((current) => current.filter((item, i) => i !== index));
    setCart((current) => current.filter((item, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-2">
      {cartItems.map((item, index) => (
        <Cartproduct
          key={index}
          product={item}
          handleMinus={() => handleMinus(index)}
          handlePlus={() => handlePlus(index)}
          removeClick={() => removeClick(index)}
        />
      ))}
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}
