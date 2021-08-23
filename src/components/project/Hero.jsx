import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

const Hero = () => {
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <section className="relative">
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
          <div className="relative w-full">
            <img
              src="/project/hero.png"
              alt="home background"
              className="min-w-full"
              loading="lazy"
            />
            <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-xl font-bold md:text-6xl font-niviaBold">
                PORTTITOR
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="/project/hero.png"
              alt="home background"
              className="min-w-full"
              loading="lazy"
            />
            <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-xl font-bold md:text-6xl font-niviaBold">
                PORTTITOR
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
