import { useEffect } from "react";
import lozad from "lozad";

const PhotoGrid = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-rows-3 gap-y-10 md:grid-cols-2 justify-items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((each) => (
        <img data-src="/home/grid/first-1.png" key={each} className="lozad" />
      ))}
    </div>
  );
};

export default PhotoGrid;
