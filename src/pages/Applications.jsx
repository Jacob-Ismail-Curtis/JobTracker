// src/screens/ApplicationsScreen.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import SortDropdown from '../components/SortDropdown';
import ApplicationList from '../components/ApplicationList';
import AddApplicationForm from '../components/AddApplicationForm';
import { FaPlus } from 'react-icons/fa';
import UseFilteredAndSortedApplications from '../hooks/UseFilteredAndSortedApplications';
import MockApplications from '../data/MockData';

const Applications = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [showAddForm, setShowAddForm] = useState(false); 
    const [applications, setApplications] = useState(MockApplications);
    const statusOrder = ['Sent', 'Confirmation', 'Action Needed', 'Interview', 'Offer'];
  
    const handleSearch = (query) => {
      setSearchQuery(query.toLowerCase());
    };
  
    const handleFilterChange = (statuses) => {
      setSelectedStatuses(statuses);
    };
  
    const handleSortChange = (order) => {
      setSortOrder(order);
    };
  
    const sortedAndFilteredApplications = UseFilteredAndSortedApplications(
      applications, searchQuery, selectedStatuses, sortOrder, statusOrder
    );
  
    const handleAddApplication = (newApplication) => {
      setApplications([...applications, newApplication]);
      setShowAddForm(false);
    };
  return (
    <>
      <div className="flex justify-center gap-4 mb-4">
        <div className="flex-1 max-w-md">
          <SearchBar onSearch={handleSearch} />
        </div>
        <SortDropdown onSortChange={handleSortChange} />
        <FilterDropdown onFilterChange={handleFilterChange} />
      </div>
      <div className="flex flex-col w-full mb-4 items-center">
        <div className="flex justify-start mx-20 mb-2">
          <button 
            onClick={() => setShowAddForm(true)} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FaPlus className="mr-2" /> Add Application
          </button>
        </div>
        {showAddForm && <AddApplicationForm onSave={handleAddApplication} onCancel={() => setShowAddForm(false)} />}
        <ApplicationList applications={sortedAndFilteredApplications} />
      </div>
    </>
  );
};

export default Applications;
