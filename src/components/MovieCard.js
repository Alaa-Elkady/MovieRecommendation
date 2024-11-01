import React from 'react';
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleinfo = () => {
   navigate(`/movie/${movie.id}`);
 };
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}  onClick={handleinfo}/>
      {movie.genre_ids.includes(10749)&&
     <div className='adult'> 18+ </div> }
    </div>
  );
};

export default MovieCard;
