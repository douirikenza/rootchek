import React, { useState } from "react";

const AddMovies = ({ handleClick }) => {
  const [newFilm, setNewFilm] = useState({
    title: "",
    description: "",
    rating: "",
    posterURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFilm((movie) => ({ ...movie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(newFilm);
    setNewFilm({
      title: "",
      description: "",
      rating: "",
      posterURL: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newFilm.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newFilm.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={newFilm.rating}
          onChange={handleChange}
        />
      </label>

      <label>
        Poster URL:
        <input
          type="text"
          name="posterURL"
          value={newFilm.posterURL}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovies;