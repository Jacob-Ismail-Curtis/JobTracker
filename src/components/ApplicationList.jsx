import React from 'react';
import ApplicationCard from './ApplicationCard';

const ApplicationList = ({ applications }) => {
  return (
    <div className="container w-full mx-auto p-4">
      <div className="flex flex-col gap-4 justify-center">
        {applications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
