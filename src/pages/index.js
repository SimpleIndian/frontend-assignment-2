import { Footer } from "components/Footer/index";
import Header from "components/Header/index";
import BlogSection from "components/home/BlogSection";
import Expertise from "components/home/Expertise";
import Hero from "components/home/Hero";
import Magazine from "components/home/Magazine";
import PhotoGraphy from "components/home/PhotoGraphy";
import Subscribe from "components/home/Subscribe";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className="w-full bg-repeat-y bg-cover bg-hero-pattern">
        <PhotoGraphy></PhotoGraphy>
        <Magazine />
        <BlogSection></BlogSection>
        <Expertise></Expertise>
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </>
  );
}
