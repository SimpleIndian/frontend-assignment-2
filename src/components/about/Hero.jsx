import Social from "components/Social";
import { useEffect } from "react";
import lozad from "lozad";

const Hero = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <section className="relative">
      <div className="relative w-full">
        <img
          data-src="/about/hero.png"
          alt="home background"
          className="z-0 min-w-full lozad"
        />
        <div className="absolute right-0 top-[15%] md:top-1/4">
          <div className="ml-auto max-w-[1300px] pb-16 text-white relative pl-8 md:pl-0  md:h-auto">
            <img
              data-src="/about/model.png"
              alt="home women"
              className="object-cover h-full min-w-full lozad max-h-[500px] md:max-h-full"
            />
            <div className="absolute md:top-1/2 md:left-[10%] p-4 -top-2 space-y-2">
              <h1 className="text-xl md:text-4xl font-niviaRegu">
                Vix Aeternum
              </h1>
              <p className="flex max-w-4xl text-sm text-gray-300 md:my-10 md:text-lg">
                <span className="mr-3">
                  <img src="/quote.svg" alt="quote" />
                </span>
                Ii adjuvetis subjectum id considero praeditis ea to spontaneo.
                Veri et quin in meas. Vix aeternum sum pleraque deponant. Sic
                non factum mandat firmae igitur clarae mediam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
