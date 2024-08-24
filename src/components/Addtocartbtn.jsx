export default function Addtocartbtn({ onclick }) {
  return (
    <button
      className="bg-black rounded-md shadow-md text-white px-3 py-1 "
      onClick={onclick}
    >
      Add to cart
    </button>
  );
}
