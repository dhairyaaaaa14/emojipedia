import React, { useState } from "react";
import "./index.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🤨": "raised eyebrows",
  "😔": "sad",
  "🥡": "takeout box",
  "🤗": "love",
  "😒": "annoyance",
  "🤞":"fingerscrossed"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [emoji,setEmoji] = useState("Translation will appear here");


  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emojiPedia</h1>
      <input id="text-box" onChange={emojiInputHandler} />
      <br></br>
      {emojisWeKnow.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
      <h2>{meaning}</h2>
    </div>
  );
}
