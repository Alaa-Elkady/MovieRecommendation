import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../services/api"; // Import the fetchMovies function

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchMovies(page, query);
        const data = response.data; // Extract the nested data object
        if (data && data.results) {
          setMovies(data.results); // Assuming the API response has a 'results' field
        } else {
          console.error("Unexpected API response:", data);
          setMovies([]); // Set to empty array if response is unexpected
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]); // Set to empty array if there's an error
      }
    };

    getMovies();
  }, [page, query]);
 
  return (
    <div className="movies">
      {/* <SearchBar onSearch={setQuery} className="search-bar" /> */}
      {/* <Filters genres={[]} onGenreChange={() => {}} selectedGenre="" className="filters" /> */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            className="movie-card"
            
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        className="pagination"
      />
    </div>
  );
};

export default Home;
