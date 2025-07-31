import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rmLogo from './RM white.png';
// import iemLogo from './IEM Red Blue Logo 1.png';
//import uemLogo from './UEM Red Blue Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', 'href': '/about' },
    { name: 'Team', 'href': '/team' },
    { name: 'Events', 'href': '/events' },
    { name: 'Contact', 'href': '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-effect shadow-2xl shadow-primary-500/10'
        : 'bg-transparent'
    }`}>
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand Name Group */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex items-center justify-center">
                <img
                  src={rmLogo}
                  alt="RoboMellontikos Logo"
                  className="w-14 h-14 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl opacity-0 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white transition-all duration-300 drop-shadow-md"> {/* Added drop-shadow-md */}
                  Robo Mellontikos
                </h1>
                <p className="text-sm text-gray-400 transition-colors duration-300">
                  UEM Kolkata
                </p>
              </div>
              {/* <div className="flex items-center space-x-2 ml-4">
                <img
                  src={iemLogo}
                  alt="IEM Logo"
                  className="h-12 w-auto drop-shadow-white-sm"
                />
                <img
                  src={uemLogo}
                  alt="UEM Logo"
                  className="h-12 w-auto drop-shadow-white-sm"
                /> 
              </div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActiveRoute(item.href)
                    ? 'text-primary-400 bg-primary-500/10 border border-primary-400/30 drop-shadow-md' // Added drop-shadow-md
                    : 'text-gray-300 hover:text-white hover:bg-white/5 drop-shadow-md' // Added drop-shadow-md
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-600 transform origin-left transition-transform duration-300 ${
                  isActiveRoute(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <div className="ml-6">
              {/* Simply apply btn-primary class directly. The glare is now part of its CSS definition. */}
              <Link to="/contact" className="btn-primary">
                Join Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button (Hamburger Icon) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel - Conditional rendering and styling */}
        <div className={`md:hidden absolute top-full left-0 w-full glass-effect border-t border-white/10 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActiveRoute(item.href)
                    ? 'text-primary-400 bg-primary-500/10 drop-shadow-md' // Added drop-shadow-md
                    : 'text-gray-300 hover:text-white hover:bg-white/5 drop-shadow-md' // Added drop-shadow-md
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              {/* Simply apply btn-primary class directly. */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;