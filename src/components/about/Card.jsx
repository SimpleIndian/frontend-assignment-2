
const Card = ({ title, subtitle, index }) => {
  return (
    <div className="flex items-start space-x-3">
      <img src={`/about/f${index}.svg`} alt="piggy" loading="lazy" />
      <div className="leading-8 md:max-w-xs">
        <h2 className="flex text-2xl">
          <img
            src="/single_quote.svg"
            alt="quote"
            loading="lazy"
            className="mr-3"
          />
          {title}
        </h2>
        <p className="mt-3 text-sm text-gray-300">{subtitle}</p>
        <hr className="my-3" />
        <p className="text-sm font-light">
          Ac exsurgit loquendi at curantes excitari conversa. Timeo motus me
          arcte id. Putarim mutetur ubi sim vix angelos scripta rom calorem
          delusum. Humano ero habeam veluti ingens ope eae postea rom ignoro.
          Appellatur intelligam ab probabiles distinctas distribuam im ad.
        </p>
      </div>
    </div>
  );
};

export default Card;
