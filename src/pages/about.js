import Hero from "components/about/Hero";
import PersonaCard from "components/about/PersonaCard";
import Card from "components/about/Card";
import Magzine from "components/about/Magzine";
import Layout from "components/Layout";

const blog = ["Respondeam", "Commodo", "Pergamque"];
const featureSec = [
  { title: "Figmenta", subtitle: "DISCOVER DESIGN" },
  { title: "Respond", subtitle: "DESIGN SOLUTIONS" },
  { title: "De Movendi", subtitle: "AWARD WINNING PLAN" },
  { title: "Commodo", subtitle: "OUTSTANING BRIEF" },
];

const About = () => {
  return (
    <Layout>
      <Hero></Hero>
      <div className="py-20 bg-opGray md:-mt-40">
        <div className="m-auto max-w-7xl ">
          <div className="px-4 pb-20 space-y-8 md:flex md:px-8 md:space-y-0">
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
    </Layout>
  );
};

export default About;
