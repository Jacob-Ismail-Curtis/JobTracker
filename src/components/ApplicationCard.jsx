import React from 'react';
import Timeline from './Timeline';

const ApplicationCard = ({ application }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-lg">{application.company}</h3>
          <p className="text-gray-600">{application.position}</p>
          <p className="text-gray-500 text-sm">{application.location}</p>
        </div>
        <Timeline status={application.status} statusDates={application.statusDates} />

      </div>
    </div>
  );
};

export default ApplicationCard;
