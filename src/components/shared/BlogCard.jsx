import { useEffect } from "react";
import lozad from "lozad";

const BlogCard = ({ postImg, postTitle, postDescription, className }) => {
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  return (
    <a
      href="#"
      className={`overflow-hidden w-[300px] min-h-[520px] block ${className}`}
    >
      <img
        className="object-cover object-center w-full lozad"
        data-src={postImg}
        alt="blog"
      />
      <div className="h-full p-6 bg-black bg-opacity-50"> 
        <h3 className="mb-3 text-xl font-medium text-white">{postTitle}</h3>
        <p className="text-gray-300">{postDescription}</p>
        <hr className="my-3 " />
        <div className="flex flex-wrap items-center justify-between">
          <div className="inline-flex items-center text-sm text-gray-400 md:mb-2 lg:mb-0">
            <img
              src="/blog/person.png"
              alt="person"
              className="mr-2"
              loading="lazy"
            />
            pine-tree
          </div>
          <div className="inline-flex items-center text-sm text-gray-400 md:mb-2 lg:mb-0">
            <img
              src="/blog/time.png"
              alt="person time"
              className="mr-2"
              loading="lazy"
            />
            July 31, 2018
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
