import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rmLogo from './RM white.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Events', href: '/events' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (href) => location.pathname === href;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled || isMenuOpen ? 'cyber-header-scrolled' : 'bg-transparent'
    }`}>
      <nav className="container-max mx-auto">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={rmLogo}
              alt="RoboMellontikos Logo"
              className="w-12 h-12 object-contain filter drop-shadow-primary flicker"
            />
            <div>
              <h1 className="font-heading text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-wide">
                Robo Mellontikos
              </h1>
              <p className="font-body text-sm text-gray-400">
                University of Engineering and Management, Kolkata
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActiveRoute(item.href) ? 'nav-link-active' : ''}`}
              >
                {item.name}
                <span className="nav-link-underline"></span>
              </Link>
            ))}
            <div className="ml-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform" className="btn-cyber-primary text-sm">
                Join Us
              </a>
            </div>
          </div>

          {/* Mobile menu button (Hamburger Icon) */}
          <div className="md:hidden mr-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
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

        {/* Mobile Navigation Panel */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block nav-link text-base ${isActiveRoute(item.href) ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform"
                className="block w-full text-center btn-cyber-primary"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;