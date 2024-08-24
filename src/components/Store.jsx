import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import ProductCard from "./ProductCard";
export default function Store() {
  const [cart, setCart, cartIds, setCartIds] = useOutletContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setItems(products);
    }
    fetchItems();
    console.log(items);
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-12 pb-24 px-10 ">
      {items.map((item, index) => {
        return (
          <ProductCard
            cart={cart}
            product={item}
            key={index}
            onclick={() => {
              setCartIds([...cartIds, item.id]);
              setCart((prevCart) => {
                const newCart = [...prevCart, items[index]];
                console.log(newCart);
                return newCart;
              });
            }}
            isAdded={cartIds.includes(item.id) ? true : false}
          />
        );
      })}
    </div>
  );
}
