import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieContainer = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div>
      <div className="movie-card">
        <img src={API_IMG + poster_path} alt=" " />
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default MovieContainer;
