const Magazine = () => {
  return (
    <section className="ml-auto max-w-[1300px] pb-16 text-white relative pl-8 md:pl-0 h-[400px] md:h-auto">
      <img
        src="/home/women.png"
        alt="home women"
        className="object-cover h-full min-w-full"
      />
      <div className="absolute md:top-1/2 md:left-[10%] p-4 top-1/4">
        <h1 className="text-2xl md:text-4xl font-butler">Magazine</h1>
        <p className="flex text-gray-300 md:my-10 md:text-lg ">
          <span className="mr-3">
            <img src="/quote.svg" alt="quote" />
          </span>
          Videbatur ab mo praestare fictitium at. Uti athei longe patet ita has.
          Fal mei eundemque perlegere hac infigatur <br />
          tot interitum somniemus. Falsitas lus nia reliquis hic immittit.
        </p>
      </div>
    </section>
  );
};

export default Magazine;
