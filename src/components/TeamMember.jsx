import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-50 hover:scale-105">
      <img src={image} alt={name} className="w-full h-auto" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
