import Hero from "../components/Hero";
import Popular from "../components/Popular";
import MovieContainer from "../components/MovieContainer";
import React, { useState, useEffect } from "react";
// import useFetchMovies from "../hooks/UseFetchMovies";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=0f0eb657aee65f5d179bddba1284e1ab";

export default function Home() {
  //   const { movies } = useFetchMovies();
  //   console.log(movies);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <Hero />
      <Popular text={"Popular"} />
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieContainer key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
