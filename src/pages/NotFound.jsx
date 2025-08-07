import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Custom hook to get the current window size.
 * This helps in creating responsive components.
 * @returns {object} An object containing the width and height of the window.
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

/**
 * The 404 page component for desktop screens.
 * This is your original component, with the necessary CSS for the button included.
 */
const DesktopNotFoundPage = () => {
  return (
    <>
      <div className="not-found-container relative w-screen h-screen overflow-hidden bg-black">
        <iframe 
          className='absolute top-0 left-0 w-full h-full border-none z-10' 
          src='https://my.spline.design/page404-vbSZhRSAQg3gkPENsltJxdwF/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="404 Not Found Spline Animation"
        ></iframe>
        <div className='absolute z-30 px-40 py-4 bg-[#FC8DFD] text-[#FC8DFD] right-0 bottom-0'>h</div>
        <Link to='/'><button class="btn-36 z-40 absolute left-60 top-[27rem]"><span class="new">Home</span><div class="old"><span>Go Back</span><span aria-hidden>Go Back</span></div></button></Link>
      </div>
    </>
  );
};

/**
 * The 404 page component for mobile screens.
 * This version is lightweight and designed for smaller viewports.
 */
const MobileNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-4">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link to='/' className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg">
        Go Home
      </Link>
    </div>
  );
};

/**
 * The main NotFoundPage component.
 * It conditionally renders either the Desktop or Mobile version
 * based on the screen width.
 */
const NotFoundPage = () => {
  const { width } = useWindowSize();
  const mobileBreakpoint = 768; // Corresponds to Tailwind's `md` breakpoint

  // To prevent a flash of the wrong component on initial render,
  // we can show a blank screen or a loader until the width is determined.
  if (width === undefined) {
    return <div className="w-screen h-screen bg-black" />;
  }

  // Render the mobile version for screens smaller than the breakpoint, otherwise render the desktop version.
  return width < mobileBreakpoint ? <MobileNotFoundPage /> : <DesktopNotFoundPage />;
};

export default NotFoundPage;
