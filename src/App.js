import React from "react";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";
import { movies } from "./movies";

const App = () => {
  return (
    <div className="tc">
      <h1>Simple Search</h1>
      <SearchBox />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
