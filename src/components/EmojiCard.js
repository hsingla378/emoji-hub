import React from "react";
import "./EmojiCard.css";

export default function EmojiCard({ name, category, group, htmlCode }) {
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Code copied!");
    } catch (err) {
      alert("Failed to copy: ", err);
    }
  };

  return (
    <div className="emoji-card">
      <div className="card-upper">
        <div className="emoji-category">{category}</div>
        <div className="emoji-group">{group}</div>
      </div>
      <div className="emoji-name">{name}</div>
      {/* <span role="img" className="emoji">
        &#128514;
      </span> */}
      <div className="html-code" onClick={(e) => copyText(e.target.innerText)}>
        {htmlCode}
      </div>
    </div>
  );
}
