import React from "react";
import "./Pagination.css";

export default function Pagination({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-section">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={
              page === currentPage ? "pagination-btn active" : "pagination-btn"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
