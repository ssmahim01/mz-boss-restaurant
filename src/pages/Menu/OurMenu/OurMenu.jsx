import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurMenu = () => {
    const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>MZ Boss | Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"} />

            {/* Main cover */}
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />

            {/* Offered menu items */}
            <MenuCategory items={offered} />

            {/* Dessert menu items */}
            <MenuCategory title={"dessert"} items={desserts} img={dessertImg} />

            {/* Pizza menu items */}
            <MenuCategory title={"pizza"} items={pizzas} img={pizzaImg} />

            {/* Salad menu items */}
            <MenuCategory title={"salad"} items={salads} img={saladImg} />

            {/* Soup menu items */}
            <MenuCategory title={"soup"} items={soups} img={soupImg} />
        </div>
    );
};

export default OurMenu;