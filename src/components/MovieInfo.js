import React from "react";

class MovieInfo extends React.Component {
  state = {
    activeMovie: [],
  };
  componentDidMount = () => {};

  render() {
    console.log(this.props);
    return <div>Movie Info</div>;
  }
}

export default MovieInfo;
