import React from "react";

const Movie = ({ name, img, description }) => {
  return (
    <div className="bg-light-blue dib pa3 ma2 grow bw2 mw5 tc shadow-5">
      <img src={img} alt="movie" />
      <div>
        <h2 className="tl">{name}</h2>
        <p className="tl">{description}</p>
      </div>
    </div>
  );
};

export default Movie;
