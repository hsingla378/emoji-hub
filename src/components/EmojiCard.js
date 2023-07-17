import React from "react";
import "./EmojiCard.css";

export default function EmojiCard({ name, category, group, htmlCode }) {
  return (
    <div className="emoji-card">
      <div className="card-upper">
        <div className="emoji-category">{category}</div>
        <div className="emoji-group">{group}</div>
      </div>
      <div className="emoji-name">{name}</div>
      <span role="img" className="emoji">
        &#x1F600;
      </span>
      <div className="html-code">{htmlCode}</div>
    </div>
  );
}
