import React, { useState } from "react";
import "./index.css";

const emojiDictionary = {
  
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "😍": "Smiling Face with Heart-Eyes",
    "🥰": "Smiling Face with Hearts",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "☺️": "Smiling Face",
    "😚": "Kissing Face with Closed Eyes",
    "😋": "Face Savoring Food",
    "😜": "Winking Face with Tongue",
    "😝": "Squinting Face with Tongue",
    "😛": "Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤪": "Zany Face",
    "🤨": "Face with Raised Eyebrow",
    "🧐": "Face with Monocle",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Dizzy Face",
    "🤯": "Exploding Head",
    "🥳": "Partying Face",
    "😎": "Smiling Face with Sunglasses",
    "🤠": "Cowboy Hat Face",
    "🥸": "Disguised Face",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "🙁": "Slightly Frowning Face",
    "☹️": "Frowning Face",
    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",
    "😦": "Frowning",
  
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
