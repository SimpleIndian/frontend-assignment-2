import { useEffect } from "react";
import lozad from "lozad";

const Subscribe = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <section className="text-white relative pl-8 md:pl-0 h-[400px] md:h-auto">
      <img
        data-src="/home/sub.png"
        alt="home women"
        className="object-cover w-full h-full lozad"
      />
      <div className="absolute  md:left-[10%] p-4 md:top-1/4 md:w-[700px] top-[10%]">
        <h1 className="flex text-2xl font-extrabold md:text-5xl font-butler">
          <span className="mr-3">
            <img className="lozad" data-src="/quote.svg" alt="quote" />
          </span>
          Subscribe Our
          <br />
          Newsletter!!
        </h1>
        <p className="my-5 text-gray-300 md:my-10">
          Videbatur ab mo praestare fictitium at. Uti athei longe patet ita has.
          tot interitum somniemus. Falsitas lus nia reliquis hic immittit.
        </p>
        <form className="relative flex items-center ">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full py-3 pl-6 text-black rounded-full outline-none"
          />
          <button className="absolute right-0">
            <img className="lozad" data-src="/telegram.svg" alt="telegram" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
