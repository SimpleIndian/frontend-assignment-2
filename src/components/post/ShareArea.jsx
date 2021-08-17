import OutLink from "components/shared/OutLink";

const ShareArea = () => {
  return (
    <div className="my-10">
      <div className="flex items-center justify-center w-full h-[2px] bg-white">
        <p className="inline-block px-10 text-sm font-bold tracking-wide text-white uppercase bg-opGray left-1/2">
          Share this
        </p>
      </div>
      <div className="flex items-center justify-center my-8 space-x-5">
        <OutLink href="#">
          <img src="/facebook.svg" alt="fb" loading="lazy" />
        </OutLink>
        <OutLink href="#">
          <img src="/twitter.svg" alt="twitter" loading="lazy" />
        </OutLink>
        <OutLink href="#">
          <img src="/printerest.svg" alt="printerst" loading="lazy" />
        </OutLink>
      </div>
    </div>
  );
};

export default ShareArea;
