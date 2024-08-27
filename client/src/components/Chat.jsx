import React from "react";

const Chat = () => {
  return (
    <div className="sm:mt-10 mt-5 lg:w-1/2 md:w-[70%] w-full">
      <div class="px-4 py-2 bg-white rounded-lg">
        <p className="mb-2">What is your query?</p>
        <textarea
          id="comment"
          rows="2"
          class="w-full p-2 mb-2 text-sm text-gray-900 bg-white border-[1px] border-slate-200 rounded-lg focus:outline-none resize-none shadow-inner"
          placeholder="Type here..."
          required
        ></textarea>
        <button className="p-2 text-sm border-[1px] border-slate-200 rounded-lg shadow-sm hover:shadow-inner">
          Ask Assistant
        </button>
        <p className="mt-4">
          <span className="font-medium">Gemini: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>
    </div>
  );
};

export default Chat;
