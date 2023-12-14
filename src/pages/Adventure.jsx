import MovieContainer from "../components/MovieContainer";
import React, { useState, useEffect } from "react";

const API_ADVENTURE =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=12";

export default function Drama() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_ADVENTURE)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <h2>
        <span className="page-title">Adeventure:</span>
        Play Trailler, Get Full list and Details by clicking on movies.
      </h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieContainer key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
