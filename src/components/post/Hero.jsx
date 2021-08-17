import Social from "components/Social";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

const Hero = () => {
  SwiperCore.use([Pagination]);

  return (
    <section className="relative px-5 py-10 md:py-32 bg-opGray">
      <Social className="absolute z-10 top-1/2 left-5"></Social>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
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
