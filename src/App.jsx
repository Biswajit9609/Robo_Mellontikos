import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import useMediaQuery from './hooks/useMediaQuery';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const MainLayout = () => {
  return (
    <div className="min-h-screen cyber-grid-bg font-body flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const lenisOptions = {
    lerp: 0.1,
    wheelMultiplier: 2,
    smoothWheel: true,
  };

  return (
    isDesktop ? (
      <ReactLenis root options={lenisOptions}>
        <AppRoutes />
      </ReactLenis>
    ) : (
      <AppRoutes />
    )
  );
}

export default App;