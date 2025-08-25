import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

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

const NotFoundPage = () => {
  const { width } = useWindowSize();
  const mobileBreakpoint = 768;

  if (width === undefined) {
    return <div className="w-screen h-screen bg-black" />;
  }
  return width < mobileBreakpoint ? <MobileNotFoundPage /> : <DesktopNotFoundPage />;
};

export default NotFoundPage;
