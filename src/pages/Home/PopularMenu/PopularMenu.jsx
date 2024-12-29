import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.filter((item) => item.category === "popular"));
      });
  }, []);

  return (
    <section className='max-w-screen-xl mx-auto mb-12'>
      <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"} />

     <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-5">
     {menu.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
     </div>

     <button className="mt-4 btn border-0 border-b-4 btn-outline uppercase text-[#1F2937] text-lg block mx-auto">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;
