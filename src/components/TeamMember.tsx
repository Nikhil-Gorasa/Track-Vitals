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
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl shadow-black/20 transform hover:scale-105 transition-all duration-500"
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 group-hover:opacity-90 transition-opacity duration-500" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-gray-200 text-lg leading-relaxed px-4 mb-6">
              {description}
            </p>
            <a 
              href={connection}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
            >
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-indigo-400 font-medium mt-1">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;