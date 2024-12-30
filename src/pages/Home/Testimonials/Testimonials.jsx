import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20 max-w-screen-xl mx-auto">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 mb-16 flex flex-col text-center items-center gap-4">
              <Rating
                style={{ maxWidth: 250 }}
                value={review?.rating}
                readOnly
              />

              <ImQuotesLeft className="md:text-8xl text-5xl" />

              <p className="text-gray-600 font-medium py-4">
                {review?.details}
              </p>
              <h3 className="text-2xl text-orange-400 font-semibold">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
