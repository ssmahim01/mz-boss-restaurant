import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "../Featured/Featured.css";
import featuredImg from "../../../assets/home/featured.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white/80 pt-8 my-20">
      <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />

      <div className="md:flex gap-8 justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 lg:px-36 px-5 md:space-y-0 space-y-4">
        <figure>
          <img src={featuredImg} alt="Featured Image" />
        </figure>

        <div>
          <p className="text-lg font-bold">Aug, 2029</p>
          <p className="uppercase font-semibold">Where can get i some?</p>
          <p className="md:text-sm text-base text-gray-300 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <Link to="/order/salad">
            <button className="mt-4 btn text-white border-0 border-b-4 btn-outline uppercase">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
