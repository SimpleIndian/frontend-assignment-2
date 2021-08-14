const experts = [
  {
    title: "Figmenta",
    color: "#FF5656",
  },
  {
    title: "Respond",
    color: "#FF954B",
  },
  {
    title: "De Movendi",
    color: "#FF4B7D",
  },
  {
    title: "Commodo",
    color: "#A84DD6",
  },
];

const Expertise = () => {
  return (
    <section className="ml-auto max-w-[1300px] pb-16 px-4">
      <h1 className="text-2xl text-white md:text-4xl font-butler">Expertise</h1>
      <p className="flex my-10 text-gray-300 md:text-lg ">
        <span className="mr-3">
          <img src="/quote.svg" alt="quote" />
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        distinctio <br />
        dolorum tempore enim expedita doloremque eaque
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
        {experts.map((each, index) => (
          <div className="text-white w-[250px]" key={index}>
            <img src={`/home/expert/exp-${index}.svg`} alt="expert" />
            <h3 className="flex items-center my-2 text-xl">
              <span
                className="block w-2 h-3 mr-1 rounded-full"
                style={{ backgroundColor: `${each.color}` }}
              ></span>
              {each.title}
            </h3>
            <p className="text-sm">DISCOVER DESIGN</p>
            <hr className="my-4" />
            <p className="font-light text-gray-400">
              Effectus supponit continet vi simulque de siquidem. Erunt bonus
              istas ferri de favis facit at. Figuras hoc vul innatis figuram.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
