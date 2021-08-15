import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/project/Hero";
import ProjectDetail from "components/project/ProjectDetail";
import ProjectCard from "components/project/ProjectCard";

const ProjectType = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <section className="bg-[#1D1D1D]">
        <div className="max-w-6xl px-5 py-16 m-auto space-y-16 md:px-10 ">
          <ProjectDetail></ProjectDetail>
          <div className="px-5 md:px-0">
            {[1, 2].map((each) => (
              <ProjectCard img={`/project/p${each}.png`} key={each} />
            ))}
          </div>
          <div className="space-y-10 text-center">
            <h3 className="text-3xl font-medium tracking-wider md:text-5xl">
              NEXT PROJECT
            </h3>
            <p className="text-gray-300 md:text-lg">Nam Scelerisque</p>
            <div className="relative w-64 p-5 m-auto">
              <span className="absolute block w-1 h-20 -top-5 bg-primary left-1/2"></span>
              <img src="/project/nextp.png" alt="next" />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProjectType;
