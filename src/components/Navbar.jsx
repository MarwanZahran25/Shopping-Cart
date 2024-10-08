/* eslint-disable react/prop-types */
import Carticon from "./Carticon";

import { Link } from "react-router-dom";
export default function Navbar({ products = 0 }) {
  return (
    <nav className="w-full bg-red-600 text-white px-2 font-bold flex lg:flex-row md:flex-row flex-col md:justify-between lg:justify-between py-5 gap-3 lg:px-20 sticky   shadow-lg ">
      <Link to={"/"}>
        <div className="text-4xl text-center font-serif ">Zahran</div>
      </Link>
      <div>
        <ul className="flex justify-between gap-20 text-2xl">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link to={"/cart"}>
            <li className="relative">
              <Carticon />
              <p className="bg-black rounded-full absolute px-2 top-0 text-lg left-5">
                {products}
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
