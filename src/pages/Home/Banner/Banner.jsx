import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} interval={3000}>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img1} alt="First image of Banner" />
      </div>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img2} alt="Second image of Banner" />
      </div>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img3} alt="Third image of Banner" />
      </div>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img4} alt="Fourth image of Banner" />
      </div>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img5} alt="Fifth image of Banner" />
      </div>
      <div className="w-full *:lg:h-[550px] *:h-96">
        <img src={img6} alt="Sixth image of Banner" />
      </div>
    </Carousel>
  );
};

export default Banner;
