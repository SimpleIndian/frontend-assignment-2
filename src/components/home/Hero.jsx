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
              src="/home/hero.png"
              loading="lazy"
              alt="home background"
              className="min-w-full"
            />
            <div className="absolute md:left-[10%] md:p-5 text-white md:bottom-[10%] max-w-[500px] bottom-5 left-0 p-3">
              <p className="flex items-center text-gray-300 md:text-lg">
                <span className="block w-2 h-3 mr-1 rounded-full bg-primary"></span>
                Minimal
              </p>
              <h1 className="mb-3 text-xl font-bold md:mt-2 md:mb-10 md:text-4xl font-butler">
                Ut porta iacculis tempus. Aenean congue metus elementum, posuere
                lectus
              </h1>
              <button className="flex items-center px-2 py-1 rounded-full md:px-4 md:py-2 ring-2 ring-white hover:bg-white group hover:text-primary">
                <span className="block w-5 h-[1px] bg-white mr-1 group-hover:bg-primary"></span>
                view project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="/home/hero.png"
              loading="lazy"
              alt="home background"
              className="min-w-full"
            />
            <div className="absolute md:left-[10%] md:p-5 text-white md:bottom-[10%] max-w-[500px] bottom-5 left-0 p-2">
              <p className="flex items-center text-gray-300 md:text-lg">
                <span className="block w-2 h-3 mr-1 rounded-full bg-primary"></span>
                Minimal
              </p>
              <h1 className="mb-3 text-xl font-bold md:mt-2 md:mb-10 md:text-4xl font-butler">
                Ut porta iacculis tempus. Aenean congue metus elementum, posuere
                lectus
              </h1>
              <button className="flex items-center px-2 py-1 rounded-full md:px-4 md:py-2 ring-2 ring-white hover:bg-white group hover:text-primary">
                <span className="block w-5 h-[1px] bg-white mr-1 group-hover:bg-primary"></span>
                view project
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
