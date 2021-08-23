import Hero from "components/post/Hero";
import Article from "components/post/Article";
import ShareArea from "components/post/ShareArea";
import Comment from "components/post/Comment";
import CreateComment from "components/post/CreateComment";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import InLink from "components/shared/InLink";
import TagBtn from "components/shared/TagBtn";
import { useEffect } from "react";
import lozad from "lozad";
import Layout from "components/Layout";

const data = [
  {
    title: "De Movendi Expirat Reducantur",
    tags: ["fashion"],
  },
  {
    title: "Aenean vitae Nisi Massa",
    tags: ["fashion", "girl"],
  },
  {
    title: "Dolor Sits Amet Augue Rutrum",
    tags: ["fashion"],
  },
];

const Post1 = () => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);
  return (
    <Layout>
      <Hero></Hero>
      <div className="p-5 bg-opGray">
        <div className="max-w-4xl m-auto">
          <Article></Article>
          <ShareArea></ShareArea>
          <Comment></Comment>
          <CreateComment></CreateComment>

          <div className="w-full bg-[#535353] mb-8">
            <div className="w-1/2 h-[2px] bg-primary"></div>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center text-sm uppercase">
              <img
                data-src="/blog/person-2.png"
                alt="person 2"
                className="lozad"
              />
              <FiChevronLeft size="20" />
              Previous Page
            </p>
            <p className="flex items-center text-sm uppercase">
              Next Page
              <FiChevronRight size="20" />
              <img
                data-src="/blog/person-3.png"
                alt="person 2"
                className="lozad"
              />
            </p>
          </div>

          <div className="py-16">
            <h2 className="mb-10 text-3xl text-center font-niviaBold">
              You Might Also Like :
            </h2>
            <div className="space-y-5 md:space-y-0 md:flex md:justify-around md:space-x-5">
              {data.map((each, index) => (
                <InLink
                  className="relative block max-w-xs m-auto"
                  href="#"
                  key={index}
                >
                  <img
                    data-src={`/blog/other${index + 1}.png`}
                    alt="other 1"
                    className="lozad"
                  />
                  <div className="absolute p-4 space-y-4 top-1/2">
                    <h2 className="text-xl font-niviaRegu">{each.title}</h2>
                    {each.tags.map((tag) => (
                      <TagBtn tag={tag} key={tag} />
                    ))}
                  </div>
                </InLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post1;
