import { BsChevronRight } from "react-icons/bs";
import { useEffect } from "react";
import lozad from "lozad";

const PersonaCard = ({ title, index }) => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <div className="max-w-[300px] m-auto md:ml-0 z-20">
      <img data-src={`/about/b${index}.png`} alt="b1" className="lozad" />
      <h2 className="flex mt-5 mb-3 text-xl font-niviaBold">
        <img
          src="/single_quote.svg"
          alt="quote"
          loading="lazy"
          className="mr-3"
        />
        {title}
      </h2>
      <p className="text-gray-400">Effectus</p>
      <hr className="my-4" />
      <p className="text-sm font-light">
        Me circulum mutuatur diversas ut. Talium ex audita is gustum et ha
        nullam certis. Effectus supponit continet vi simulque de siquidem. Erunt
        bonus istas ferri de favis facit at. Figuras hoc vul innatis figuram.
      </p>
      <button className="flex items-center px-4 py-2 mt-5 rounded-full bg-primary">
        Read More
        <BsChevronRight className="ml-2"></BsChevronRight>
      </button>
    </div>
  );
};

export default PersonaCard;
