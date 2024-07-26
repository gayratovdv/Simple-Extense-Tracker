// src/components/Dashboard/Filter.js
import React from 'react';
import './Dashboard.scss';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter-container">
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('above100')}>Above $100</button>
      <button onClick={() => onFilterChange('below100')}>Below $100</button>
    </div>
  );
};

export default Filter;
