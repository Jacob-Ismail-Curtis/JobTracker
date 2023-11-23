import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)} style={{ height: '42px' }} className="border border-gray-300 rounded px-2">
      <option value="">Sort by Date</option>
      <option value="asc">Oldest First</option>
      <option value="desc">Newest First</option>
    </select>
  );
};

export default SortDropdown;
