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
    <section className="ml-auto max-w-[1300px] pb-16 grid md:grid-cols-3 grid-cols-1 gap-y-8 justify-items-center md:justify-items-start">
      {blogData.map((each, index) => (
        <BlogCard
          postDescription={each.description}
          postImg={each.image}
          postTitle={each.title}
          key={index}
        />
      ))}
    </section>
  );
};

export default BlogSection;
