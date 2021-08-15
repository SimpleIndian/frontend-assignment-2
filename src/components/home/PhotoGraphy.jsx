import PhotoGrid from "./PhotoGrid";

const PhotoGraphy = () => {
  return (
    <section className=" ml-auto max-w-[1300px] py-16 text-white px-4">
      <h1 className="text-4xl font-butler">Photography</h1>
      <p className="flex my-10 text-lg text-gray-300">
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
