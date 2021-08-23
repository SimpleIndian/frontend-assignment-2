import BlogCard from "components/shared/BlogCard";
const blogData = [
  {
    image: "/blog/blog-1.png",
    title: "Deo Suspicio Deinceps Figmenta",
    description:
      "Donec non turpis tincidunt velit fringilla bibendum at vitae mauris. Nulla malesuada suscipit tristique. Phasellus malesuada convallis massa vel pharetra. Phasellus a tellus lectus. Donec…",
  },
  {
    image: "/blog/blog-2.png",
    title: "De Movendi Expirat Reducantur",
    description:
      "Donec non turpis tincidunt velit fringilla bibendum at vitae mauris. Nulla malesuada suscipit tristique. Phasellus malesuada convallis massa vel pharetra. Phasellus a tellus lectus. Donec…",
  },
  {
    image: "/blog/blog-3.png",
    title: "Aenean Vitae Nisi Massa ",
    description:
      "Donec non turpis tincidunt velit fringilla bibendum at vitae mauris. Nulla malesuada suscipit tristique. Phasellus malesuada convallis massa vel pharetra. Phasellus a tellus lectus. Donec…",
  },
];

const BlogSection = () => {
  return (
    <section className="grid grid-cols-1 px-10 pb-24 md:px-0 md:grid-cols-3 gap-y-8 md:gap-x-16 justify-items-center md:justify-items-start">
      {blogData.map((each, index) => (
        <BlogCard
          postDescription={each.description}
          postImg={each.image}
          postTitle={each.title}
          key={index}
          index={index}
        />
      ))}
    </section>
  );
};

export default BlogSection;
