import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Form = () => {};
const SearchBox = (props) => {
  const styling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <div className="search-form">
      <input
        style={styling}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        placeholder="Type to search..."
      ></input>
      <button type="submit">
        <SearchIcon />
        onClick={props.onClickHandler}
      </button>
    </div>
  );
};

export default SearchBox;
