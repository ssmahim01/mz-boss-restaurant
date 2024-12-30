import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      {title && <Cover img={img} title={title} />}

      <div className="lg:w-full w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <Link to={`/order/${title ? title : "dessert"}`}><button className="mt-4 btn border-0 border-b-4 btn-outline uppercase text-[#1F2937] text-lg block mx-auto">
        Order Your Favorite Food
      </button></Link>
    </div>
  );
};

export default MenuCategory;
