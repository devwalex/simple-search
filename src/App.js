import React, { Component } from "react";
import MovieList from "./Components/MovieList";
import SearchBox from "./Components/SearchBox";
import { movies } from "./movies";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      searchField: "",
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };
  render() {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="tc">
        <h1>Simple Movies Search</h1>
        <SearchBox searchChange={this.onSearchChanged} />
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
