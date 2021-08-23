import Social from "components/Social";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

const Hero = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <section className="relative px-5 py-10 md:py-32 bg-opGray" id="blog">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        autoplay
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img
            src="/post.png"
            loading="lazy"
            alt="home background"
            className="m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/post.png"
            loading="lazy"
            alt="home background"
            className="m-auto"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
