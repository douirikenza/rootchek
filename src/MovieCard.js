import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, description, rating, posterURL }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <Link to={`/movie/${id}`}>
        <img src={posterURL} alt={title} className="card-img-top" />
      </Link>
      <div className="card-body">
        <Link to={`/movie/${id}`} className="card-title-link">
          <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Rating: {rating}</small></p>
      </div>
    </div>
  );
}

export default MovieCard;