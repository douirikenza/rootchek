import React from 'react';
import movies from './Movies'; // Adjust the import path based on your actual file structure

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === parseInt(id));
};

const MovieDescription = ({ match }) => {
  const movie = getMovieById(match.params.id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>
        <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
          Watch Trailer
        </a>
      </p>
    </div>
  );
};

export default MovieDescription;