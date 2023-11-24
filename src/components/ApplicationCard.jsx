import React, { useState } from 'react';
import Timeline from './Timeline';
import { FaChevronDown } from 'react-icons/fa';

const ApplicationCard = ({ application }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
      <div 
        className="p-4 hover:bg-gray-100" 
        onClick={toggleDropdown}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg">{application.company}</h3>
            <p className="text-gray-600">{application.position}</p>
            <p className="text-gray-500 text-sm">{application.location}</p>
          </div>
          <Timeline status={application.status} statusDates={application.statusDates} />
          <FaChevronDown className="ml-2 text-gray-600" />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Status
              </label>
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700">
                {/* Populate options based on your status data */}
              </select>
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input 
                type="date" 
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
            <div className="flex space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cover Letter
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Job Description
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
