import axios from "axios";
import React, { useEffect, useState } from "react";
import EmojiCard from "./EmojiCard";
import Header from "./Header";
import "./HomePage.css";

export default function LandingPage() {
  const [emojisData, setEmojisData] = useState([]);

  const fetchEmojis = async () => {
    try {
      const response = await axios.get("https://emojihub.yurace.pro/api/all");
      let data = response.data;
      setEmojisData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <>
      <Header />
      <select name="category-select" id="category-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <section className="emoji-section">
        {emojisData.map((obj) => {
          return (
            <EmojiCard
              name={obj.name}
              category={obj.category}
              group={obj.group}
              htmlCode={obj.htmlCode}
            />
          );
        })}
      </section>
    </>
  );
}
