import { useEffect } from "react";
import lozad from "lozad";

const Magazine = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <section className="ml-auto max-w-[1300px] pb-16 text-white relative pl-8 md:pl-0 h-[400px] md:h-auto">
      <img
        data-src="/home/women.png"
        alt="home women"
        className="object-cover h-full min-w-full lozad"
      />
      <div className="absolute md:top-1/2 md:left-[10%] p-4 top-[20%] space-y-4">
        <h1 className="text-2xl md:text-4xl font-butler">Magazine</h1>
        <p className="flex max-w-4xl text-gray-300 md:my-10 md:text-lg">
          <span className="mr-3">
            <img data-src="/quote.svg" alt="quote" className="lozad" />
          </span>
          Videbatur ab mo praestare fictitium at. Uti athei longe patet ita has.
          Fal mei eundemque perlegere hac infigatur tot interitum somniemus.
          Falsitas lus nia reliquis hic immittit.
        </p>
      </div>
    </section>
  );
};

export default Magazine;
