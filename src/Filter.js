import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const handleTitleFilterChange = (event) => {
    const newTitleFilter = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      title: newTitleFilter,
    }));
  };

  const handleRatingFilterChange = (event) => {
    const newRatingFilter = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: newRatingFilter,
    }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filters.title}
        onChange={handleTitleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filters.rating}
        onChange={handleRatingFilterChange}
      />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;