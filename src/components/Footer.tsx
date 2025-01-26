import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Track Vitals Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">Track Vitals</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing railway track monitoring through advanced technology
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Reference Papers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.researchgate.net/publication/268807371_Wireless_Sensor_Networks_for_Condition_Monitoring_in_the_Railway_Industry_A_Survey " 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Wireless Sensor Networks for Railway Monitoring: A Survey
                </a>
              </li>
              <li>
                <a 
                  href="https://www.researchgate.net/publication/317311559_Railway_Track_Crack_Detection_Vehicle" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Railway Track Crack Detection Vehicle: A Study
                </a>
              </li>
              <li>
                <a 
                  href="https://www.researchgate.net/publication/317176907_The_Structural_health_condition_monitoring_of_rail_steel_using_acoustic_emission_techniques" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Rail Steel Health Monitoring with Acoustic Emission
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Track Vitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;