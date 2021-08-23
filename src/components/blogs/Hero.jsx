import Social from "components/Social";

const Hero = () => {
  return (
    <div className="md:h-[75vh] relative bg-opGray h-[50vh]">
      <div className="absolute md:left-[10%] p-5 text-white md:top-1/3 max-w-4xl top-[10%] space-y-5">
        <h1 className="mb-3 text-2xl font-bold md:mt-2 md:mb-10 md:text-5xl font-niviaBold">
          Events
        </h1>
        <p className="flex items-start space-x-3 leading-5 text-gray-300 md:font-medium">
          <img src="/quote.svg" alt="quote" loading="lazy" />
          <span>
            Veritas ad timenda me nunquid deludat. Cap voce meis ordo sum.
            Probant eam percipi istarum veteris tum meipsum cognitu ope.
            Objectivus corrigatur attigerint transferre gi solutiones ac. Co
            soni meos ii toga. Simplex sensuum materia eas innatas possint
          </span>
        </p>
      </div>
    </div>
  );
};
export default Hero;
