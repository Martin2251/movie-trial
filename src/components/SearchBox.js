import React from "react";

const SearchBox = (props) => {
  return (
    <div className="search-form">
      <input
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
