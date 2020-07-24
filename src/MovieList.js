import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  if (movies.length <= 0) {
    return <h3>Movie Not Found!!!</h3>;
  }
  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie key={index} id={movie.id} name={movie.name} img={movie.img} description={movie.description} />;
      })}
    </div>
  );
};

export default MovieList;
