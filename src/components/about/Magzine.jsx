import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

const Magzine = () => {
  SwiperCore.use([Pagination, Navigation]);

  const [index, setindex] = useState(1);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      direction="horizontal"
      navigation
      pagination={{
        clickable: true,
      }}
      onSlideChange={(ev) => setindex(() => ev.realIndex + 1)}
    >
      <SwiperSlide>
        <section className="ml-auto max-w-[1300px] pb-16 text-white relative pl-8 md:pl-0 h-[400px] md:h-auto">
          <img
            src="/about/model2.png"
            alt="home women"
            className="object-cover h-full min-w-full"
            loading="lazy"
          />
          <div className="absolute md:top-1/4 md:left-[10%] p-4 top-[10%] space-y-4 max-w-xl">
            <p>{index}/2</p>
            <p className="flex md:my-10">
              Nunc eget nisi dapibus, ultricies velit a, feugiat mi. duis nec
              augue nisi . tellus tellus, vehicula et ullamcorper malesuada,
              consequat vitae tellus, Fusce diggnissim Dul Pretium malesuada
              enim accumsan , vulputate libero.
            </p>
            <div className="flex items-center space-x-3">
              <img src="/about/u1.png" alt="user 1" loading="lazy" />
              <div>
                <p className="font-bold">Zona Zimmy</p>
                <p className="text-xs text-gray-300">Designer</p>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="ml-auto max-w-[1300px] pb-16 text-white relative pl-8 md:pl-0 h-[400px] md:h-auto">
          <img
            src="/about/model2.png"
            alt="home women"
            className="object-cover h-full min-w-full"
            loading="lazy"
          />
          <div className="absolute md:top-1/4 md:left-[10%] p-4 top-[10%] space-y-4 max-w-xl">
            <p>{index}/2</p>
            <p className="flex md:my-10">
              Nunc eget nisi dapibus, ultricies velit a, feugiat mi. duis nec
              augue nisi . tellus tellus, vehicula et ullamcorper malesuada,
              consequat vitae tellus, Fusce diggnissim Dul Pretium malesuada
              enim accumsan , vulputate libero.
            </p>
            <div className="flex items-center space-x-3">
              <img src="/about/u1.png" alt="user 1" loading="lazy" />
              <div>
                <p className="font-bold">Zona Zimmy</p>
                <p className="text-xs text-gray-300">Designer</p>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Magzine;
