const WorkCard = () => {
  return (
    <>
      <div className="items-center md:flex md:justify-evenly">
        <div className="origin-top-left translate-x-3 transform-gpu rotate-2">
          <img src="/work/card1.png" alt="work" />
          <p className="flex items-center text-white origin-top-left -rotate-90 -translate-x-8 transform-gpu">
            Story
            <span className="block w-8 h-[1px] bg-primary ml-2"></span>
          </p>
        </div>
        <div className="space-y-5 text-white max-w-[300px] px-3 z-20">
          <p className="flex items-center text-white md:justify-end">
            <span className="block w-8 h-[1px] bg-gray-400 mr-2"></span>
            <span className="text-primary">01 </span>/ 03
          </p>
          <h2 className="text-4xl tracking-wider md:text-right md:-ml-20 md:text-6xl font-niviaBold">
            Cuiuspiam
          </h2>
          <p>
            Dari ut ullo id ex enim. Nunc quum eas vos bile per hic. Cujuspiam
            ex instituti veritatem et…
          </p>
          <button className="w-12 h-12 text-sm rounded-full ring-1 ring-white">
            View
          </button>
        </div>
      </div>
      <div className="items-center md:flex md:flex-row-reverse md:justify-evenly">
        <div className="origin-top-left -translate-x-3 transform-gpu -rotate-2 max-w-max">
          <img src="/work/card2.png" alt="work" />
          <p className="flex items-center justify-end text-white origin-right -rotate-90 translate-x-4 -translate-y-24 transform-gpu">
            Story
            <span className="block w-8 h-[1px] bg-primary ml-2"></span>
          </p>
        </div>
        <div className="space-y-5 text-white max-w-[300px] px-3 z-20">
          <p className="flex items-center text-white ">
            <span className="block w-8 h-[1px] bg-gray-400 mr-2"></span>
            <span className="text-primary">02 </span>/ 03
          </p>
          <h2 className="text-4xl tracking-wider md:text-right md:text-6xl font-niviaBold">
            Quocunque
          </h2>
          <p>
            Dari ut ullo id ex enim. Nunc quum eas vos bile per hic. Cujuspiam
            ex instituti veritatem et…
          </p>
          <button className="w-12 h-12 text-sm rounded-full ring-1 ring-white">
            View
          </button>
        </div>
      </div>
      <div className="items-center md:flex md:justify-evenly ">
        <div className="origin-top-left translate-x-3 transform-gpu rotate-2">
          <img src="/work/card3.png" alt="work" />
          <p className="flex items-center text-white origin-top-left -rotate-90 -translate-x-8 transform-gpu">
            Story
            <span className="block w-8 h-[1px] bg-primary ml-2"></span>
          </p>
        </div>
        <div className="space-y-5 text-white max-w-[300px] px-3">
          <p className="flex items-center text-white md:justify-end">
            <span className="block w-8 h-[1px] bg-gray-400 mr-2"></span>
            <span className="text-primary">03 </span>/ 03
          </p>
          <h2 className="text-4xl tracking-wider md:text-right md:-ml-20 md:text-6xl font-niviaBold">
            Interdum
          </h2>
          <p>
            Dari ut ullo id ex enim. Nunc quum eas vos bile per hic. Cujuspiam
            ex instituti veritatem et…
          </p>
          <button className="w-12 h-12 text-sm rounded-full ring-1 ring-white">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
