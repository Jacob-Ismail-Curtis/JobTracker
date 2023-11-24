import { useMemo } from 'react';

const useFilteredAndSortedApplications = (applications, searchQuery, selectedStatuses, sortOrder, statusOrder) => {
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

  const sortedApplications = useMemo(() => {
    return filteredApplications.slice().sort((a, b) => {
      if (!sortOrder) return 0;
      let dateA = new Date(a.statusDates['Sent']);
      let dateB = new Date(b.statusDates['Sent']);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [filteredApplications, sortOrder]);

  return sortedApplications;
};

export default useFilteredAndSortedApplications;
