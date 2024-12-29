import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MZ Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Service />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
