import { useState } from "react";

// import img
import searchIcon from "../../assets/img/search-icon.png";

// import css
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box" placeholder="Search">
      <label htmlFor="search-input" className="search-icon" style={{ backgroundImage: `url(${searchIcon})` }}></label>
      <input id="search-input" className="search-input"  />
    </div>
  );
};

export default SearchBox;
