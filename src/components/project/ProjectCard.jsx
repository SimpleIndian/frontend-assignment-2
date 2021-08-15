import { useEffect } from "react";
import lozad from "lozad";

const ProjectCard = ({ img }) => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <div className="mb-10 md:pb-10">
      <img data-src={img} alt="project1" className="lozad" />
      <p className="max-w-lg mt-5 text-gray-300">
        Cujuspiam ex instituti veritatem et obversari vereorque productus.
        Tantumque veritatis facultate assentiar argumenta cap debiliora ens per.
        Poni ullo de quid se boni. Habentur conscius explicui mox dum agi.
      </p>
    </div>
  );
};

export default ProjectCard;
