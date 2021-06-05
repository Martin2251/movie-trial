import React from "react";
import "../styles/SearchBox.css";

const Form = () => {};
const SearchBox = (props) => {
  return (
    <div className="search-form">
      <div className="search-area">
        <input
          id="search-bar"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          placeholder="Type to search..."
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
