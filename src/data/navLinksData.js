export const navLinksData = [
  {
    heading: "home",
    hasElements: true,
    isActive: true,
    fullLink: "/",
    links: [
      { link: "#", label: "dark" },
      { link: "#", label: "light" },
      { link: "#", label: "video elements"},
    ],
  },
  {
    heading: "works",
    hasElements: true,
    fullLink: "/works",
    links: [
      { link: "#", label: "featured" },
      { link: "#", label: "normal-caption-1" },
      { link: "#", label: "normal-caption-2" },
      { link: "#", label: "small-lightbox" },
      { link: "#", label: "masnoary normal" },
      { link: "#", label: "masnoary small" },
      {
        link: "#",
        label: "project type",
        hasMoreItems: true,
        moreItems: [
          { link: "#", label: "drop" },
          { link: "#", label: "drop2" },
        ],
      },
    ],
  },
  {
    heading: "blogs",
    hasElements: true,
    fullLink: "/blogs",
    links: [
      { link: "/blog/post-1", label: "first blog" },
      { link: "#", label: "blog style 01" },
      { link: "#", label: "blog style 02" },
      { link: "#", label: "project type"},
    ],
  },
  {
    heading: "projects",
    hasElements: true,
    fullLink: "/projects",
    links: [
      { link: "#", label: "slideshow" },
      { link: "#", label: "photo wall" },
      { link: "#", label: "text columns" },
      { link: "#", label: "text banner" },
      { link: "#", label: "carousel" },
      { link: "#", label: "large images" },
      { link: "#", label: "FAQ and progress" },
      { link: "#", label: "pricing table" },
    ],
  },
  {
    heading: "contact us",
    hasElements: true,
    fullLink: "/contact",
    links: [
      { link: "#", label: "shop"},
      { link: "#", label: "about us" },
      { link: "#", label: "contact us" },
      { link: "#", label: "contact me" },
    ],
  },
  {
    heading: "about us",
    hasElements: false,
    fullLink: "/about",
  },
];
