import { fetchMovies, fetchTrendingMovies } from "../services/api";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
export default function Home() {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const Family = await fetchMovies(1, "10751");
      setFamilyMovies(Family.data.results);
      const Drama = await fetchMovies(1, "10751");
      setDramaMovies(Drama.data.results);
      const Romance = await fetchMovies(1, "18");
      setRomanceMovies(Romance.data.results);
      const Comedy = await fetchMovies(1, "35");
      setComedyMovies(Comedy.data.results);
      const Action = await fetchMovies(1, "28");
      setActionMovies(Action.data.results);
      const trendingMovies = await fetchTrendingMovies("day");
      setTrendingMovies(trendingMovies);
    };

    loadMovies();
  }, []);
  return (
    <div className="home">
      <div className="trendSection">
        <h2>Trending</h2>
        <div className="movie-list">
          {trendingMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
      <div className="dramaSection">
        <h2>Drama</h2>
        <div className="movie-list">
          {dramaMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
      <div className="RomaceSection">
        <h2>Romance</h2>
        <div className="movie-list">
          {romanceMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
      <div className="familySection">
        <h2>Family </h2>
        <div className="movie-list">
          {familyMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
      <div className="comdeySection">
        <h2>Comedy </h2>
        <div className="movie-list">
          {comedyMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
      <div className="actionSection">
        <h2>Action</h2>
        <div className="movie-list">
          {actionMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="movie-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
