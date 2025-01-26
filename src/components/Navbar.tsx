import React from 'react';
import logo from '../assets/logo.png';

interface NavbarProps {
  links: Array<{
    name: string;
    ref: React.RefObject<HTMLDivElement>;
  }>;
  onNavigate: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, onNavigate }) => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Track Vitals Logo" 
              className="h-16 w-auto"
            />
            <span className="text-xl font-bold text-white">TRACK VITALS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.ref)}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;