import { useState } from "react";

export default function Cartproduct({
  product,
  removeClick,
  handlePlus,
  handleMinus,
}) {
  const count = product.quantity;

  return (
    <div className="flex lg:flex-row sm:flex-col rounded-md shadow-lg font-bold  p-5 justify-around gap-7 w-96 ">
      <div className="flex flex-col justify-around h-full gap-3">
        <h1>{product.title}</h1>
        <h1>{`${product.price} $`}</h1>
        <div className="flex rounded-lg items-center gap-1">
          <button
            className="bg-gray-300 py-1 rounded-full px-2"
            onClick={() => {
              if (count === 1) {
                return;
              }
              handleMinus();
              setCount(count - 1);
            }}
          >
            -
          </button>

          <h6>{count}</h6>
          <button
            className="bg-gray-300 py-1 rounded-full px-2"
            onClick={() => {
              handlePlus();
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 text-white font-semibold rounded-md max-w-fit px-3 py-1"
          onClick={removeClick}
        >
          Remove
        </button>
      </div>
      <img
        src={product.image}
        height="auto"
        alt=""
        className="max-w-20 max-h-32 self-center"
      />
    </div>
  );
}
