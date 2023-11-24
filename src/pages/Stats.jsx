import React from 'react';
import MockApplications from '../data/MockData';

const Stats = () => {
  // Calculate total applications
  const totalApplications = MockApplications.length;

  // Calculate pending applications
  const pendingApplications = MockApplications.filter(app => app.status === 'Pending').length;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold">Total Applications</p>
          <p className="text-3xl font-bold text-blue-500">{totalApplications}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold">Pending Applications</p>
          <p className="text-3xl font-bold text-orange-500">{pendingApplications}</p>
        </div>
      </div>
      {/* Additional stats content can be added here */}
    </div>
  );
}

export default Stats;
