import React from 'react';
import TeamMember from './TeamMember'; // Replace with actual path to TeamMember component

const HomeTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Johnson',
      role: 'COO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Brown',
      role: 'Designer',
      image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Emily Brown',
        role: 'Designer',
        image: 'https://via.placeholder.com/150',
    },
];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
          <p className="text-gray-600 mt-2">Meet the people behind our success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
