import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ApplicationList from './components/ApplicationList';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import SortDropdown from './components/SortDropdown';
import AddApplicationForm from './components/AddApplicationForm';
import MockApplications from './data/MockData';
import { FaPlus } from 'react-icons/fa'; 

function App() {
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

  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      const currentStatusIndex = statusOrder.indexOf(app.status);
      const isStatusMatch = selectedStatuses.some(selectedStatus => {
        const selectedStatusIndex = statusOrder.indexOf(selectedStatus);
        return currentStatusIndex >= selectedStatusIndex;
      });

      return (
        (app.company.toLowerCase().includes(searchQuery) || app.position.toLowerCase().includes(searchQuery)) &&
        (selectedStatuses.length === 0 || isStatusMatch)
      );
    });
  }, [applications, searchQuery, selectedStatuses, statusOrder]);

  const sortedAndFilteredApplications = useMemo(() => {
    return filteredApplications.slice().sort((a, b) => {
      if (!sortOrder) return 0;
      let dateA = new Date(a.statusDates['Sent']);
      let dateB = new Date(b.statusDates['Sent']);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [filteredApplications, sortOrder]);

  const handleAddApplication = (newApplication) => {
    // Logic to add the new application to your state or backend
    setApplications([...applications, newApplication]);
    setShowAddForm(false); // Close the form after adding
  };

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div className="flex justify-center gap-4 mb-4">
        <div className="flex-1 max-w-md">
          <SearchBar onSearch={handleSearch} />
        </div>
        <SortDropdown onSortChange={handleSortChange} />
        <FilterDropdown onFilterChange={handleFilterChange} />
      </div>
      <div className="flex flex-col w-full mb-4 items-center"> {/* Full width container */}
        <div className="flex justify-start mx-20 mb-2"> {/* Align button to the left */}
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
      <Footer />
    </div>
  );
  
  
}

export default App;