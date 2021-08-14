import Social from "components/Social";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

const Hero = () => {
  SwiperCore.use([Pagination]);

  return (
    <section className="relative">
      <Social className="absolute z-10 bottom-10 left-5"></Social>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="/home/hero.png"
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
              <button className="flex items-center px-2 py-1 rounded-full md:px-4 md:py-2 ring-2 ring-white">
                <span className="block w-5 h-[1px] bg-white mr-1"></span>
                view project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="/home/hero.png"
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
              <button className="flex items-center px-2 py-1 rounded-full md:px-4 md:py-2 ring-2 ring-white">
                <span className="block w-5 h-[1px] bg-white mr-1"></span>
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
