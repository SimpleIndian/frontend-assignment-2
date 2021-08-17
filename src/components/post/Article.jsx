import InLink from "components/shared/InLink";
import TagBtn from "components/shared/TagBtn";

const Article = () => {
  return (
    <article className="max-w-3xl m-auto mb-10">
      <TagBtn tag="fashion" />
      <h1 className="my-4 text-2xl font-niviaBold">
        Deo Suspicio Deinceps Figmeenta
      </h1>
      <div className="flex flex-wrap items-center justify-between mt-5 text-gray-400 md:justify-start md:space-x-3">
        <div className="inline-flex items-center text-sm md:mb-2 lg:mb-0">
          <img
            src="/blog/person.png"
            alt="person"
            className="mr-2"
            loading="lazy"
          />
          pine-tree
        </div>
        <div className="inline-flex items-center text-sm md:mb-2 lg:mb-0">
          <img
            src="/blog/time.png"
            alt="person time"
            className="mr-2"
            loading="lazy"
          />
          July 31, 2018
        </div>
        <div className="inline-flex items-center text-sm md:mb-2 lg:mb-0">
          <img
            src="/message.svg"
            alt="person time"
            className="mr-2"
            loading="lazy"
          />
          1
        </div>
      </div>
      <div className="bg-[#383838]  py-8 px-5 border-l-4 border-primary mt-5 mb-8 relative">
        <img src="/quote.svg" alt="quote" className="absolute right-3 top-3" />
        <p className="my-4 text-lg font-light leading-6 font-butler">
          Donec non turpis tincidunt velit fringilla bibendum at vitae mauris.
          Nulla malesuada suscipit tristique. Phasellus malesuada convallis
          massa vel pharetra.
        </p>
      </div>
      <p className="font-light text-gray-200">
        Phasellus a tellus lectus. Donec eleifend elit velit, quis faucibus odio
        feugiat quis. Fusce nibh justo, ullamcorper interdum arcu ut, pharetra
        porta sapien. Aliquam erat volutpat. Aenean nec venenatis risus, ac
        ullamcorper nibh. Curabitur ac quam eu sapien porttitor egestas
        tristique a nisl. Phasellus a tellus lectus. Donec eleifend elit velit,
        quis faucibus odio feugiat quis. Fusce nibh justo, ullamcorper interdum
        arcu ut, pharetra porta sapien. Aliquam erat volutpat. Aenean nec
        venenatis risus, ac ullamcorper nibh. Curabitur ac quam eu sapien
        porttitor egestas tristique a nisl.
      </p>
      <p className="my-8 font-light text-white">
        Aenean nec finibus mi. Fusce suscipit eros non pretium commodo. Vivamus
        libero mauris, dapibus tincidunt congue at, congue et libero. Duis ut
        lacinia dui, sed elementum est. Nullam interdum dolor ullamcorper
        vestibulum ultrices. Aenean elementum a arcu vitae malesuada. Fusce
        viverra lacus odio, non sagittis est iaculis in. Phasellus iaculis
        suscipit ipsum quis posuere. Morbi convallis pellentesque tellus sed
        accumsan. Curabitur bibendum ligula sed nunc imperdiet maximus. In vitae
        dolor et magna mattis ultrices. Nulla eget faucibus nisi, eget efficitur
        lorem. Pellentesque sodales malesuada sem. Sed egestas id nibh non
        pretium. Nam mattis, lorem sit amet gravida faucibus, augue lectus
        ullamcorper ante, sit amet consequat nunc mauris a felis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </p>
      <div className="flex items-center space-x-3">
        <h3 className="text-xl text-gray-300">Tags</h3>
        <InLink href="#" className="px-3 py-1 border rounded-full">
          Fuseo
        </InLink>
        <InLink href="#" className="px-3 py-1 border rounded-full">
          Libreo
        </InLink>
      </div>
    </article>
  );
};

export default Article;
