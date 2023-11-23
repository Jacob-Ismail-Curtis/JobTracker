import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const FilterDropdown = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const statuses = ['Sent', 'Confirmation', 'Action Needed', 'Interview', 'Offer'];

  const handleCheckboxChange = (status) => {
    const updatedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter(s => s !== status)
      : [...selectedStatuses, status];

    setSelectedStatuses(updatedStatuses);
    onFilterChange(updatedStatuses);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        Status <FaCaretDown className="ml-2 -mr-1 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {statuses.map(status => (
              <label key={status} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedStatuses.includes(status)}
                  onChange={() => handleCheckboxChange(status)}
                />
                {status}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
