import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import Filter from './Filter';
import MovieDescription from './MovieDescription';
import MovieTrailer from './MovieTrailer';
import films from './Movies';

function App() {
  const [movies, setMovies] = useState(films);
  const [filteredMovies, setFilteredMovies] = useState(films);

  const handleFilter = (filter) => {
    const filtered = films.filter((movie) => {
      const titleCondition = movie.title.toLowerCase().includes(filter.title.toLowerCase());
      const ratingCondition = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
      return titleCondition && ratingCondition;
    });

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newFilm) => {
    setMovies([newFilm, ...movies]);
    // Update filteredMovies if needed
    handleFilter({ title: '', rating: '' });
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Movie</Link>
            </li>
          </ul>
        </nav>

        <Filter onFilter={handleFilter} />

        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/add" element={<AddMovies handleclick={handleAddMovie} />} />
          <Route path="/movie/:id" element={<MovieDescription />} />
          <Route path="/trailer/:id" element={<MovieTrailer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;