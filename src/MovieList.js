import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie key={index} id={movie.id} name={movie.name} img={movie.img} description={movie.description} />;
      })}
    </div>
  );
};

export default MovieList;
