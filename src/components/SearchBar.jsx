import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center border border-gray-300 rounded w-full"> {/* Adjust width as needed */}
        <div className="p-2">
          <FaSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          className="flex-1 p-2 border-none rounded w-full"
          placeholder="Search by company or role..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
