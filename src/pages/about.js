import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/about/Hero";
import PersonaCard from "components/about/PersonaCard";
import Card from "components/about/Card";
import Magzine from "components/about/Magzine";

const blog = ["Respondeam", "Commodo", "Pergamque"];
const featureSec = [
  { title: "Figmenta", subtitle: "DISCOVER DESIGN" },
  { title: "Respond", subtitle: "DESIGN SOLUTIONS" },
  { title: "De Movendi", subtitle: "AWARD WINNING PLAN" },
  { title: "Commodo", subtitle: "OUTSTANING BRIEF" },
];

const About = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="py-20 bg-opGray md:-mt-40">
        <div className="max-w-[1300px] ml-auto ">
          <div className="px-4 space-y-8 md:flex md:px-8 md:space-y-0">
            {blog.map((each, index) => (
              <PersonaCard title={each} key={index} index={index} />
            ))}
          </div>
          <div className="my-10">
            <Magzine></Magzine>
          </div>
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 gap-y-16">
            {featureSec.map((each, index) => (
              <Card
                title={each.title}
                key={index}
                index={index}
                subtitle={each.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
