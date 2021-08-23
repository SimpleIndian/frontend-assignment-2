import BlogSection from "components/home/BlogSection";
import Expertise from "components/home/Expertise";
import Hero from "components/home/Hero";
import Magazine from "components/home/Magazine";
import PhotoGraphy from "components/home/PhotoGraphy";
import Subscribe from "components/home/Subscribe";
import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page - Best India</title>
      </Head>

      <Layout>
        <Hero></Hero>
        <div className="w-full bg-repeat-y bg-cover bg-hero-pattern">
          <div className="py-20 m-auto max-w-7xl md:py-32">
            <PhotoGraphy></PhotoGraphy>
            <Magazine />
            <BlogSection></BlogSection>
            <Expertise></Expertise>
            <Subscribe></Subscribe>
          </div>
        </div>
      </Layout>
    </>
  );
}
