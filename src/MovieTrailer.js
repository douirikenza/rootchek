import React from 'react';
import { Movie } from './Movies'; // Import your movie data or replace it with your actual movie data source

const MovieTrailer = ({ match }) => {
  const Movie = Movie.find((m) => m.id === parseInt(match.params.id));

  if (!Movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{Movie.title}</h1>
      <p>Description: {Movie.description}</p>
      <p>Rating: {Movie.rating}</p>
      <p>Trailer Link: {Movie.trailerLink}</p>
    </div>
  );
};

export default MovieTrailer;