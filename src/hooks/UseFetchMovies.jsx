import { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=0f0eb657aee65f5d179bddba1284e1ab";

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return { movies };
}
