import React from "react";

//map over the list of movies with.map and return the poster

const ClearButton = (props) => {
  return (
    <>
      <button className="button-clear" onClick={props.onClickHandler}>
        {props.label}
      </button>
    </>
  );
};

export default ClearButton;
