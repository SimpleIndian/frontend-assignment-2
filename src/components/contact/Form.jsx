import { BsChevronRight } from "react-icons/bs";

const Form = () => {
  return (
    <div className="py-10 my-16 space-y-10">
      <div className="inline-flex items-center text-sm md:mb-2 lg:mb-0">
        <img
          src="/single_quote.svg"
          alt="person time"
          className="mr-2"
          loading="lazy"
        />
        <h2 className="text-lg font-bold font-niviaBold">Message</h2>
      </div>

      <form className="space-y-5 ">
        <div className="space-y-5 md:flex md:space-y-0 md:space-x-3">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-light text-gray-300"
            >
              Your Name (required)
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-light text-gray-300"
            >
              Your Email (required)
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="site"
              className="block mb-2 text-sm font-light text-gray-300"
            >
              Your site
            </label>
            <input
              type="text"
              id="site"
              className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-light text-gray-300"
          >
            Message
          </label>
          <textarea
            name="comment"
            cols="30"
            rows="10"
            className="w-full px-5 py-3 bg-[#313131] outline-none rounded-xl"
          ></textarea>
        </div>
        <button className="flex items-center px-4 py-2 rounded-full bg-primary">
          Send
          <BsChevronRight className="ml-2"></BsChevronRight>
        </button>
      </form>
    </div>
  );
};

export default Form;
