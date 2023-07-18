import React from "react";
import EmojiCard from "./EmojiCard";
import "./EmojiSection.css";

export default function EmojiSection({ currentCards }) {
  return (
    <section className="emoji-section">
      {currentCards.map((obj, index) => {
        return (
          <EmojiCard
            key={index}
            name={obj.name}
            category={obj.category}
            group={obj.group}
            htmlCode={obj.htmlCode}
          />
        );
      })}
    </section>
  );
}
