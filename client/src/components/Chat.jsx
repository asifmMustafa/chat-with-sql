import React, { useState } from "react";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [error, setError] = useState("");

  const onClick = async () => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://chat-with-sql-server.netlify.app/.netlify/functions/api/assistant?query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setError("Failed to ask assistant :(");
        return;
      }

      setError("");

      const result = await response.json();
      setGeminiResponse(result.response);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sm:mt-10 mt-5 lg:w-1/2 md:w-[70%] w-full sm:text-sm text-xs">
      <div className="px-4 py-2 bg-white rounded-lg">
        <p className="mb-2">What is your query?</p>
        <textarea
          id="comment"
          rows="2"
          className="w-full p-2 mb-2 text-gray-900 bg-white border-[1px] border-slate-200 rounded-lg focus:outline-none resize-none shadow-inner"
          placeholder="Type here..."
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea>
        <button
          onClick={onClick}
          className="mb-2 p-2 border-[1px] border-slate-200 rounded-lg shadow-sm hover:shadow-inner"
        >
          Ask Assistant
        </button>
        {error && <p className="text-red-500 my-2">{error}</p>}
        {geminiResponse && (
          <p className="mt-2">
            <span className="font-medium">Gemini: </span>
            {geminiResponse}
          </p>
        )}
      </div>
    </div>
  );
};

export default Chat;
