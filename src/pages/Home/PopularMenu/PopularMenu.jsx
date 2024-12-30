import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-screen-xl lg:w-full w-11/12 mx-auto mb-12">
      <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"} />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <Link to="/our-menu">
        <button className="mt-4 btn border-0 border-b-4 btn-outline uppercase text-[#1F2937] text-lg block mx-auto">
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
