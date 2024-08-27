import { useState, useEffect } from "react";
import Cartproduct from "./Cartproduct";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cart, setCart, cartIds, setCartIds, cartTotal, setCartTotal] =
    useOutletContext();

  const sum = Math.round(
    cartTotal.reduce((previous, current) => {
      return previous + current.price * current.quantity;
    }, 0)
  );

  return (
    <div className="grid grid-cols-[1fr,300px] justify-center">
      <div className="flex  p-14 flex-wrap pb-32 mb-9 gap-3  justify-center">
        {cartTotal.map((item, index) => {
          return (
            <Cartproduct
              key={index}
              product={item}
              handleMinus={() => {
                setCartTotal((current) => {
                  const newcurrent = current.map((item, i) => {
                    if (index === i) {
                      if (item.quantity === 1) {
                        return;
                      }
                      return { ...item, quantity: item.quantity - 1 };
                    } else {
                      return item;
                    }
                  });
                  return newcurrent;
                });
              }}
              handlePlus={() => {
                setCartTotal((current) => {
                  const newCurrent = current.map((item, i) => {
                    if (index === i) {
                      return { ...item, quantity: item.quantity + 1 };
                    } else {
                      return item;
                    }
                  });
                  return newCurrent;
                });
              }}
              removeClick={() => {
                setCartTotal((cart) => {
                  const up = cart.filter((item, i) => {
                    return index !== i;
                  });
                  return up;
                });
                setCartIds((cartIds) => {
                  const newCartIds = cartIds.filter((i) => {
                    return i !== item.id;
                  });
                  return newCartIds;
                });
                setCart((cart) => {
                  const up = cart.filter((item, i) => {
                    return index !== i;
                  });
                  return up;
                });
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center max-h-[130vh] items-center gap-7 ">
        <h1 className="font-bold text-3xl ">{`Total : ${sum} $`}</h1>
        <button
          className="bg-black rounded-md text-white font-semibold py-1 px-3"
          onClick={() => {
            alert("thank you for using our fake store");

            setCart([]);
            setCartIds([]);
            setCartTotal([]);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
