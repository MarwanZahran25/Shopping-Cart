import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-3xl md:text-4xl lg:text-6xl min-h-[80vh] font-bold leading-snug  ">
      <p>
        Everything You Need And <br />
        <Link
          to={"/shop"}
          className="text-center font-extrabold text-yellow-600 flex justify-center "
        >
          More
        </Link>
      </p>
    </div>
  );
}
