import React, { useState } from "react";
import "./tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [input, setInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleImageChange = (event) => {
    setImgInput(event.target.value);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Ahmed Bolarinwa",
      userName: "tesla_sir",
      verified: true,
      text: input,
      image: imgInput,
      avatar:
        "https://cdn0.iconfinder.com/data/icons/superglyph-user/30/user2-512.png",
    });

    setInput("");
    setImgInput("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn0.iconfinder.com/data/icons/superglyph-user/30/user2-512.png"></Avatar>
          <input
            placeholder="What's happening?"
            type="text"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={imgInput}
          onChange={handleImageChange}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
