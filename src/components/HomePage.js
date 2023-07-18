import axios from "axios";
import React, { useEffect, useState } from "react";
import EmojiSection from "./EmojiSection";
import Loading from "./Loading";
import Header from "./Header";
import FilterSection from "./FilterSection";
import "./HomePage.css";
import Pagination from "./Pagination";

export default function LandingPage() {
  const [emojisData, setEmojisData] = useState([]);
  const [filteredEmojisData, setFilteredEmojisData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // Fetch emojis from API
  const fetchEmojis = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://emojihub.yurace.pro/api/all");
      let data = response.data;
      setEmojisData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  //Get unique categories from the whole dat
  const findUniqueCategories = async () => {
    let data = await fetchEmojis();
    const uniqueCategoriesArr = [
      ...new Set(data.map((emoji) => emoji.category)),
    ];
    setUniqueCategories(uniqueCategoriesArr);
    return uniqueCategories;
  };

  //Handle the selecting of category from dropdown
  const handleCategory = (category) => {
    if (category === "") {
      setFilteredEmojisData(emojisData);
    } else {
      const filteredData = emojisData.filter(
        (obj) => obj.category === category
      );
      setFilteredEmojisData(filteredData);
    }
  };

  useEffect(() => {
    fetchEmojis();
    findUniqueCategories();
  }, []);

  useEffect(() => {
    setFilteredEmojisData(emojisData);
  }, [emojisData]);

  //Get values for pagination
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = filteredEmojisData.slice(firstCardIndex, lastCardIndex);

  return (
    <div className="container">
      <Header />
      <FilterSection
        handleCategory={handleCategory}
        uniqueCategories={uniqueCategories}
      />

      {isLoading ? <Loading /> : <EmojiSection currentCards={currentCards} />}
      <Pagination
        totalCards={filteredEmojisData.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
