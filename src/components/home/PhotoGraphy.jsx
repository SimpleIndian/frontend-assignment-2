import PhotoGrid from "./PhotoGrid";

const PhotoGraphy = () => {
  return (
    <section className="px-4 pb-24 md:px-0">
      <h1 className="text-4xl font-butler">Photography</h1>
      <p className="flex mt-10 mb-20 text-lg text-gray-300">
        <span className="mr-3">
          <img src="/quote.svg" alt="quote" loading="lazy" />
        </span>
        Brachia rom corpori nostrae saporem ingenio dum imo usu. Videbatur ab mo
        praestare fictitium at. <br /> Uti athei longe patet ita has. Fal mei
        eundemque perlegere
      </p>
      <PhotoGrid></PhotoGrid>
    </section>
  );
};

export default PhotoGraphy;
