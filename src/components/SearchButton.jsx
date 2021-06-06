import React from "react";

//map over the list of movies with.map and return the poster

const SearchButton = (props) => {
  return (
    <>
      <button className="button" onClick={props.onClickHandler}>
        {props.label}
      </button>
    </>
  );
};

export default SearchButton;
