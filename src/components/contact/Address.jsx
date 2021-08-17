const Address = ({ title }) => {
  return (
    <div className="leading-8 md:max-w-xs">
      <h2 className="flex items-start text-lg">
        <img
          src="/single_quote.svg"
          alt="quote"
          loading="lazy"
          className="mr-3"
        />
        {title}
      </h2>
      <hr className="my-3" />
      <p>
        10, Firs Avenue, Muswell Hill, London, N10 3LY Tel: 02 9876-6543 &nbsp;
        <span className="font-medium">andy@pinetree.com</span>
      </p>
    </div>
  );
};

export default Address;
