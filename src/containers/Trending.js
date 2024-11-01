import { fetchTrendingMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
export default function Trending()  {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const trendingMovies = await fetchTrendingMovies("day");
      setTrendingMovies(trendingMovies);
    };
    loadMovies();
  });
  return (
    <div className="trending">
      <h2>Trending Movies</h2>
      <div className="movie-list">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="movie-card" />
        ))}
      </div>
    </div>
  );
};
