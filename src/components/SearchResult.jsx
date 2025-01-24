import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";

const SearchResult = ({ items, searchInput }) => {
  const displayedItems = items.slice(0, 4);
  return (
    <div className="absolute h-fit w-60 bg-black pb-4 flex flex-col items-center">
      <Divider />
      {displayedItems.length === 0 && searchInput.length !== 0 && (
        <p>No product found!</p>
      )}
      {displayedItems.length > 0 &&
        displayedItems.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="flex items-center justify-center"
          >
            <div className="w-20 h-20 mr-2">
              <img src={item.image} />
            </div>
            <h1>{item.name}</h1>
          </Link>
        ))}
    </div>
  );
};

export default SearchResult;
