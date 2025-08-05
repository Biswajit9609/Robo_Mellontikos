// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkVeil from './components/DarkVeil';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import useMediaQuery from './hooks/useMediaQuery';
import NotFoundPage from './pages/NotFound';

// Helper component to scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The main layout wrapper for all pages
const MainLayout = () => {
  return (
    <div className="relative min-h-screen font-body flex flex-col">
      {/* The Animated Background - Fixed and behind everything */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <DarkVeil 
          hueShift={-85}
          noiseIntensity={0.04}
          scanlineIntensity={0.1}
          speed={2}
        />
      </div>

      {/* The Page Content - On top of the background */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Component that defines all the application routes, passing props down
const AppRoutes = ({ isLoading }) => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

// The main App component that manages loading and smooth scrolling
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const lenisOptions = { lerp: 0.1, wheelMultiplier: 2, smoothWheel: true };

  const handleLoadingFinished = () => {
    setIsLoading(false);
    setTimeout(() => setIsFinished(true), 500); 
  };

  return (
    <>
      {!isFinished && <LoadingScreen onLoaded={handleLoadingFinished} />}
      
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {isDesktop ? (
          <ReactLenis root options={lenisOptions}>
            <AppRoutes isLoading={isLoading} />
          </ReactLenis>
        ) : (
          <AppRoutes isLoading={isLoading} />
        )}
      </div>
    </>
  );
}

export default App;