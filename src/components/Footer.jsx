import { Link } from 'react-router-dom';
import rmLogo from './RM white.png';
import insta from './icons8-instagram-24.png';
import x from "./icons8-x-50.png";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/robouemk", sr: "Facebook", icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )},
    { href: "https://www.instagram.com/rmellontikos/", sr: "Instagram", icon: <img src={insta} alt="Instagram" className="h-6 w-6" /> },
    { href: "https://www.linkedin.com/company/robo-mellontikos/", sr: "LinkedIn", icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { href: "https://x.com/RMellontikos", sr: "X", icon: <img src={x} alt="X" className="h-6 w-6" /> }
  ];

  return (
    <footer className="cyber-footer">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={rmLogo}
                alt="RoboMellontikos Logo"
                className="w-14 h-14 object-contain filter drop-shadow-primary"
              />
              <div>
                <h3 className="footer-heading">Robo Mellontikos</h3>
                <p className="font-body text-gray-400">UEM Kolkata Robotics Division</p>
              </div>
            </div>
            <p className="font-body text-gray-300 mb-6 max-w-md">
              A syndicate of engineers and innovators from UEM Kolkata, forging the future of autonomous systems and intelligent robotics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.sr} href={link.href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{link.sr}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Data-Stream</h3>
            <ul className="space-y-3 mt-4">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/team" className="footer-link">Agents</Link></li>
              <li><Link to="/events" className="footer-link">Broadcasts</Link></li>
              <li><Link to="/about" className="footer-link">Archives</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading">Coordinates</h3>
            <div className="space-y-2 mt-4 font-body text-gray-300">
              <p>University of Engineering & Management</p>
              <p>New Town, Sector 7, Kolkata - 700156</p>
              <p>West Bengal, India</p>
              <p className="pt-2">
                <a href="mailto:robomellontikos@uem.edu.in" className="text-primary hover:underline">
                  robomellontikos@uem.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent mt-12 pt-8 text-center font-body text-gray-500">
          <p>
            SYSTEM LOCK: {new Date().getFullYear()} Robo Mellontikos // UEMK Division. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;