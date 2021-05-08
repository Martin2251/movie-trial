import React from "react";

const MovieButton = (props) => {
  return (
    <>
      <button className="more-info-button" onClick={props.onClickHandler}>
        {props.label}
      </button>
    </>
  );
};

export default MovieButton;
