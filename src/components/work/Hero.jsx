import Social from "components/Social";

const Hero = () => {
  return (
    <section className="relative">
      <Social className="absolute z-10 top-1/2 left-5"></Social>
      <div className="relative w-full">
        <img
          src="/work/hero.png"
          alt="home background"
          className="min-w-full"
          loading="lazy"
        />
        <div className="absolute md:p-5 text-white md:left-[15%] p-3 max-w-[900px] md:top-1/3 top-4">
          <h1 className="mb-3 text-2xl md:text-4xl font-nivia">Featured</h1>
          <p className="flex text-sm text-gray-300 md:my-10 md:text-lg">
            <span className="mr-3">
              <img src="/quote.svg" alt="quote" loading="lazy" />
            </span>
            Mendax juncta mentis parvus sequor vi ferant se si. Ut debiliora
            consistat cerebella an co scriptura ob. Fas perspicuum repugnemus
            realitatem durationem uno non imaginaria perfectior ibi. Pati re
            vice ista ecce ante etsi co to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
