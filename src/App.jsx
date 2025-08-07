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

// --- CSS Styles Component ---
// This component injects the necessary CSS for the mobile grid background
// directly into the document. This avoids needing a separate CSS file.
const CyberGridStyles = () => (
  <style>{`
    :root {
      --color-bg: #010411; /* A very dark blue, almost black background */
      --color-accent: rgba(168, 85, 247, 0.4); /* A semi-transparent purple for the grid lines */
    }

    .cyber-grid {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -10; /* Places the grid behind all other page content */
      background-color: var(--color-bg);
      background-image:
        linear-gradient(var(--color-accent) 1px, transparent 1px),
        linear-gradient(to right, var(--color-accent) 1px, transparent 1px);
      background-size: 50px 50px; /* The size of the grid squares */
      background-position: -1px -1px;
    }
  `}</style>
);

// Helper component to scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Component for the mobile cyberpunk grid background
const MobileBackground = () => (
  <div className="cyber-grid" />
);

// The main layout wrapper for all pages
const MainLayout = ({ isDesktop }) => {
  return (
    <div className="relative min-h-screen font-body flex flex-col">
      {/* Conditionally render the background based on screen size */}
      {isDesktop ? (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <DarkVeil
            hueShift={-85}
            noiseIntensity={0.04}
            scanlineIntensity={0.1}
            speed={2}
          />
        </div>
      ) : (
        <MobileBackground />
      )}

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
const AppRoutes = ({ isLoading, isDesktop }) => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout isDesktop={isDesktop} />}>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
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
      {/* This component adds the grid styles to the app */}
      <CyberGridStyles />
      
      {!isFinished && <LoadingScreen onLoaded={handleLoadingFinished} />}
      
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {isDesktop ? (
          <ReactLenis root options={lenisOptions}>
            <AppRoutes isLoading={isLoading} isDesktop={isDesktop} />
          </ReactLenis>
        ) : (
          <AppRoutes isLoading={isLoading} isDesktop={isDesktop} />
        )}
      </div>
    </>
  );
}

export default App;
