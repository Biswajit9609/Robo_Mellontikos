import { Link } from 'react-router-dom';
import rmLogo from './RM white.png';
import insta from './icons8-instagram-24.png';
import x from "./icons8-x-50.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <img
                  src={rmLogo}
                  alt="RoboMellontikos Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Robo Mellontikos</h3>
                <p className="text-white opacity-70">UEM Kolkata Robotics Club</p>
              </div>
            </div>
            <p className="text-white opacity-80 mb-4 max-w-md">
              Official robotics club of University of Engineering and Management Kolkata, 
              fostering innovation and excellence in robotics and automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/robouemk" className="text-white opacity-60 hover:text-primary-300 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rmellontikos/" className="text-white opacity-60 hover:text-primary-300 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <img
                  src = {insta}
                  alt = "Instagram RM"
                  className="h-6 w-6"
                />
              </a>
              <a href="https://www.linkedin.com/company/robo-mellontikos/" className="text-white opacity-60 hover:text-primary-300 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/RMellontikos" className="text-white opacity-60 hover:text-primary-300 transition-colors duration-200">
                <span className="sr-only">X</span>
                <img
                  src = {x}
                  alt = "Instagram RM"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white opacity-80 hover:text-primary-300 transition-colors duration-200">Home</Link></li>
              <li><Link to="/team" className="text-white opacity-80 hover:text-primary-300 transition-colors duration-200">Team</Link></li>
              <li><Link to="/events" className="text-white opacity-80 hover:text-primary-300 transition-colors duration-200">Events</Link></li>
              <li><Link to="/about" className="text-white opacity-80 hover:text-primary-300 transition-colors duration-200">About</Link></li>
              <li><Link to="/contact" className="text-white opacity-80 hover:text-primary-300 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-white opacity-80">
              <p>University of Engineering and Management</p>
              <p>New Town, Kolkata - 700156</p>
              <p>West Bengal, India</p>
              <p className="mt-4">
                <a href="mailto:robomellontikos@uem.edu.in" className="text-primary-300 hover:text-primary-200 transition-colors duration-200">
                  robomellontikos@uem.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white opacity-60">
            © 2025 Robo Mellontikos - UEM Kolkata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
