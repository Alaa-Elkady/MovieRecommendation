import React from 'react';

const Filters = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="filters">
      <label>Filter by Genre:</label>
      <ul className="genre-list" value={selectedGenre}  >
        <li onClick={onGenreChange}>All</li>
        {genres.map(genre => (
          <li key={genre.id} value={genre.id} onClick={onGenreChange}>{genre.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
