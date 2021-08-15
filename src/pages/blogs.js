import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/blogs/Hero";
import Masonry from "react-masonry-css";
import BlogCard from "components/shared/BlogCard";
import { blogsData } from "data/blogsData";

const Blogs = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    500: 1,
  };
  const blogsDesc =
    "Ut porta iaculis tempus. Aenean congue metus elementum, posuere lectus sit amet, ullamcorper elit. Phasellus auctor augue a nibh accumsan, tristique vehicula libero lobortis. Sed…";
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <section className="bg-[#1d1d1d]">
        <div className="max-w-6xl px-5 py-16 m-auto space-y-16 md:px-10">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-7 "
            columnClassName="pl-7 bg-clip-padding"
          >
            {blogsData &&
              blogsData.map((each, index) => (
                <div key={index} className="mb-10">
                  <BlogCard
                    className="m-auto"
                    postDescription={blogsDesc}
                    postTitle={each.title}
                    postImg={`/all-blogs/b${index}.png`}
                  />
                </div>
              ))}
          </Masonry>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
