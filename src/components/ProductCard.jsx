import StarIcon from "../components/StarIcon";
import Addtocartbtn from "./Addtocartbtn";

export default function ProductCard({ product, onclick, isAdded }) {
  return (
    <div className="max-w-[300px] shadow-xl -2 border-gray-300 rounded-sm p-4 flex flex-col items-center justify-between  gap-2 font-semibold">
      <img
        src={product.image}
        alt={product.title}
        height="auto"
        className="w-40"
      />
      <h1>{product.title}</h1>
      <ul className="flex self-start gap-3">
        <li>
          <StarIcon />
        </li>
        <li>{`${product.rating.rate}  (${product.rating.count})`}</li>
      </ul>
      <div className="flex justify-between w-full">
        <h1>{`${product.price} $`}</h1>
        {!isAdded && (
          <Addtocartbtn
            onclick={() => {
              onclick();
            }}
          />
        )}
        {isAdded && <h1>Added</h1>}
      </div>
    </div>
  );
}
