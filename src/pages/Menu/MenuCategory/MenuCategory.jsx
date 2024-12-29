import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      {title && <Cover img={img} title={title} />}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
