import React from "react";
import "./FilterSection.css";

export default function FilterSection({ handleCategory, uniqueCategories }) {
  return (
    <select
      name="category-select"
      id="category-select"
      onChange={async (e) => await handleCategory(e.target.value)}
    >
      <option value="">all</option>
      {uniqueCategories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
}
