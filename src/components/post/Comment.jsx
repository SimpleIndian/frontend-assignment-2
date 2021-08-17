const Comment = () => {
  return (
    <div className="space-y-5 ">
      <h4 className="text-xl text-white font-niviaRegu">1 Comment</h4>
      <div className="flex items-start space-x-4">
        <img src="/blog/person.png" alt="person" loading="lazy" />
        <div className="bg-[#383838] p-5 rounded-xl relative">
          <div className="w-5 h-5 bg-[#383838] absolute -left-2 transform rotate-45 top-3"></div>
          <img src="/reply.svg" alt="reply" className="absolute right-6" />
          <p className="text-lg">Pinetree</p>
          <p className="mb-5 text-gray-300 mt-3text-sm">july 29, 2019</p>
          <p className="font-light text-gray-300">
            Realem videbo aliqua is dignum to optima an mo. Fore vita mo ordo
            haec ex. Quarta nondum illico aliter gi ignoro de id quidam. Ope
            factas quovis magnis cogito dat ubi partim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
