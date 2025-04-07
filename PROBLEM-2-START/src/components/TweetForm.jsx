import React, { useState } from "react";

export default function TweetForm({ addTweet }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTweet(input.trim());
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's happening?"
        value={input}
        onChange={handleChange}
      />
      <button
        className="tweet-button"
        disabled={!input.trim()} 
        style={{ backgroundColor: input.trim() ? "purple" : "gray" }} 
      >
        Tweet
      </button>
    </form>
  );
}