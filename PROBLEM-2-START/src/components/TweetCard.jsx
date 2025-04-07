import React from "react";

export default function TweetCard({ id, title, read, toggleRead }) {
  // Handle click to toggle read status
  const handleClick = () => {
    toggleRead(id);
  };

  return (
    <div className="tweet" onClick={handleClick}>
      <h4 className={read ? "read" : ""}>{title}</h4>
      <small className={read ? "read" : "not-read"}>
        {read ? "Read" : "Not Read"}
      </small>
    </div>
  );
}
