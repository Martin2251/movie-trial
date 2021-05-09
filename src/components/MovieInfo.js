import React from "react";

class MovieInfo extends React.Component {
  state = {
    activeMovie: [],
  };
  componentDidMount = () => {
    const getMovieRequest = async () => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`;

      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(response.movies);
    };
  };

  render() {
    console.log(this.props);
    return <div>Movie Info</div>;
  }
}

export default MovieInfo;
