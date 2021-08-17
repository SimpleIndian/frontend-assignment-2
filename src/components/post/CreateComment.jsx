const CreateComment = () => {
  return (
    <div className="py-10 space-y-7">
      <div className="inline-flex items-center text-sm md:mb-2 lg:mb-0">
        <img
          src="/message.svg"
          alt="person time"
          className="mr-2"
          loading="lazy"
        />
        <h2 className="text-2xl font-niviaBold">Leave a Comment</h2>
      </div>
      <p className="bg-[#383838] py-3 px-2  text-gray-300 font-light md:max-w-max">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="space-y-5 ">
        <textarea
          name="comment"
          cols="30"
          rows="10"
          placeholder="*Comments"
          className="w-full px-5 py-3 bg-[#313131] outline-none rounded-xl"
        ></textarea>
        <div className="space-y-5 md:flex md:space-y-0 md:space-x-3">
          <input
            type="text"
            placeholder="*Name"
            className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
          />
          <input
            type="email"
            placeholder="*Email"
            className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
          />
          <input
            type="text"
            placeholder="*Website"
            className="w-full px-5 py-6 bg-[#313131] outline-none rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
