import { Link } from 'react-router-dom';
import rmLogo from './RM white.png';
// import insta from './icons8-instagram-24.png';
import x from "./icons8-x-50.png";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/robouemk", sr: "Facebook", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    )},
    { href: "https://www.instagram.com/rmellontikos/", sr: "Instagram", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>)},
    { href: "https://www.linkedin.com/company/robo-mellontikos/", sr: "LinkedIn", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
              <p>New Town, Action Area III, Kolkata - 700160</p>
              <p>West Bengal, India</p>
              <p className="pt-2">
                <a href="mailto:robotics.society.uemk@gmail.com" className="text-primary hover:underline">
                  robotics.society.uemk@gmail.com
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