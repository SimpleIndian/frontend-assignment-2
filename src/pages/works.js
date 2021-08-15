import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/work/Hero";
import WorkCard from "components/work/WorkCard";
import Head from "next/head";

const Works = () => {
  return (
    <>
      <Head>
        <title>Featured works - Best India</title>
      </Head>
      <Header></Header>
      <Hero></Hero>
      <section className="bg-black md:pb-40">
        <div className="max-w-4xl px-10 py-20 m-auto space-y-16 md:py-0 md:-mt-80">
          <WorkCard></WorkCard>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Works;
