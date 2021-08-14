const BlogCard = ({ postImg, postTitle, postDescription }) => {
  return (
    <div className="overflow-hidden w-[300px] min-h-[520px]">
      <img
        className="object-cover object-center w-full lg:h-48 md:h-36"
        src={postImg}
        alt="blog"
      />
      <div className="h-full p-6 bg-black bg-opacity-50">
        <h3 className="mb-3 text-xl font-medium text-white">{postTitle}</h3>
        <p className="text-gray-300">{postDescription}</p>
        <hr className="my-3 " />
        <div className="flex flex-wrap items-center justify-between">
          <div className="inline-flex items-center text-sm text-gray-400 md:mb-2 lg:mb-0">
            <img src="/blog/person.png" alt="person" className="mr-2" />
            pine-tree
          </div>
          <div className="inline-flex items-center text-sm text-gray-400 md:mb-2 lg:mb-0">
            <img src="/blog/time.png" alt="person" className="mr-2" />
            July 31, 2018
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
