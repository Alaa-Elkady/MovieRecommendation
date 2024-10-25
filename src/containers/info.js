import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieById } from "../services/api";
export default function Info() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMovieById(id); // Fetch the movie details by ID
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load movie details.");
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="info">
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="content">
        <div className="content-title r">
          Movie Name :<div className="title w">{movie.title}</div>
        </div>
        <div className="content-desc r">
          Overview:<div className="desc w">{movie.overview}</div>
        </div>
        <div className="released-date r">
          Released date :<div className="date w">{movie.release_date}</div>
        </div>
        <div className="langauge r">
          Langauge :<div className="lang w">{movie.original_language}</div>
        </div>
        <div className="rating r">
          Rate :<div className="rate w">{movie.vote_average}</div>
        </div>
      </div>
    </div>
  );
}
