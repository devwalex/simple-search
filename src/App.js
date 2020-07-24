import React from "react";
import MovieList from "./MovieList";
import { movies } from "./movies";

const App = () => {
  return (
    <div className="tc">
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
