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
import Admin from './pages/Admin';
import useMediaQuery from './hooks/useMediaQuery';
import NotFoundPage from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';


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


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


const MobileBackground = () => (
  <div className="cyber-grid" />
);


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


const AppRoutes = ({ isLoading, isDesktop }) => {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary fallback={<NotFoundPage />}>
        <Routes>
          <Route element={<MainLayout isDesktop={isDesktop} />}>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rm-admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};


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
