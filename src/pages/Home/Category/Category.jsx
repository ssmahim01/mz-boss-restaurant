import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css/pagination";
import "swiper/css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="md:w-full w-11/12 max-w-screen-xl mx-auto">
        <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"} />
      <Swiper
        autoplay={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-10"
      >
        <SwiperSlide>
          <img className="relative" src={Slide1} alt="Slide image 1" />
          <h3 className="text-4xl uppercase absolute bottom-8 left-16 text-[#FFFFFF]">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className="relative" src={Slide2} alt="Slide image 2" />
          <h3 className="text-4xl uppercase absolute bottom-8 left-16 text-[#FFFFFF]">
            Pizzas
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className="relative" src={Slide3} alt="Slide image 3" />
          <h3 className="text-4xl uppercase absolute bottom-8 left-16 text-[#FFFFFF]">
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className="relative" src={Slide4} alt="Slide image 4" />
          <h3 className="text-4xl uppercase absolute bottom-8 left-16 text-[#FFFFFF]">
            Desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className="relative" src={Slide5} alt="Slide image 5" />
          <h3 className="text-4xl uppercase absolute bottom-8 left-16 text-[#FFFFFF]">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
