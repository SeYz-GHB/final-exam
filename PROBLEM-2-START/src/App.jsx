import React, { useState } from "react";
import TweetForm from "./components/TweetForm";
import TweetCard from "./components/TweetCard";

// Initial tweets data
const INITIAL_TWEETS = [
  {
    id: 0,
    title: "React JS exam on going",
    read: false,
  },
  {
    id: 1,
    title: "KNY Holidays tomorrow!",
    read: false,
  },
  {
    id: 2,
    title: "Review you Web Dev course !",
    read: true,
  },
];

export default function App() {
 
  const [tweets, setTweets] = useState(INITIAL_TWEETS);

  const addTweet = (title) => {
    const newTweet = {
      id: tweets.length > 0 ? tweets[0].id + 1 : 0, 
      title: title,
      read: false, 
    };
    setTweets([newTweet, ...tweets]); 
  };

  const toggleRead = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, read: !tweet.read } : tweet
      )
    );
  };

  return (
    <>
      <header>
        <h1>CADT Tweets</h1>
      </header>
      <TweetForm addTweet={addTweet} />
      <div className="tweet-list">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            id={tweet.id}
            title={tweet.title}
            read={tweet.read}
            toggleRead={toggleRead}
          />
        ))}
      </div>
    </>
  );
}