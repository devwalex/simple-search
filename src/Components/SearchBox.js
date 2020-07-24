import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input className="pa3 ba b--blue bg-lightest-blue" type="search" placeholder="Search Movies" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
