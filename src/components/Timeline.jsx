import React from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaUserCircle, FaGift } from 'react-icons/fa';

const Timeline = ({ status, statusDates }) => {
  const statuses = [
    { name: 'Sent', icon: <FaPaperPlane /> },
    { name: 'Confirmation', icon: <FaCheckCircle /> },
    { name: 'Action Needed', icon: <FaExclamationCircle /> },
    { name: 'Interview', icon: <FaUserCircle /> },
    { name: 'Offer', icon: <FaGift /> }
  ];
  const currentStatusIndex = statuses.findIndex(s => s.name === status);

  return (
    <div className="flex flex-col flex-1 px-10">
      <div className="grid grid-cols-5 gap-4 mb-2">
        {statuses.map((s, index) => (
          <div key={s.name} className="flex flex-col items-center">
            <div className={`text-2xl ${currentStatusIndex >= index ? 'text-green-500' : 'text-gray-300'}`}>
              {s.icon}
            </div>
            <div className={`text-xs mt-1 font-bold ${currentStatusIndex >= index ? 'text-green-500' : 'text-gray-500'}`}>
              {s.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-300 rounded-full h-1.5">
        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${(currentStatusIndex / (statuses.length - 1)) * 100}%` }}></div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-2 text-xs">
        {statuses.map(s => (
          <div key={s.name} className="text-center">
            {statusDates[s.name] || '—'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
