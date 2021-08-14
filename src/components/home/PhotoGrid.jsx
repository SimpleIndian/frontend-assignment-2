const PhotoGrid = () => {
  return (
    <div className="grid px-3 md:grid-rows-3 gap-y-10">
      <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:space-x-4">
        {[1, 2, 3, 4].map((each) => (
          <img src={`/home/grid/first-${each}.png`} key={each} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:ml-10 md:space-x-4">
        {[1, 2, 3, 4, 5].map((each) => (
          <img src={`/home/grid/second-${each}.png`} key={each} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:space-x-4">
        {[1, 2, 3, 4].map((each) => (
          <img src={`/home/grid/third-${each}.png`} key={each} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
