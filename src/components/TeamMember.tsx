import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  connection: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description, connection, delay = 0 }) => {
  return (
    <div 
      className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center px-4">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-indigo-400 mb-4">{role}</p>
        <a 
          href={connection} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
        >
          Connect
        </a>
      </div>
    </div>
  );
};

export default TeamMember;