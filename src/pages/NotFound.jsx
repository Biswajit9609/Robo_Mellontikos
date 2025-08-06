import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="not-found-container relative w-screen h-screen overflow-hidden bg-black">
      <iframe className='absolute top-0 left-0 w-full h-full border-none z-10' src='https://my.spline.design/page404-vbSZhRSAQg3gkPENsltJxdwF/' frameborder='0' width='100%' height='100%'></iframe>
      <div className='absolute z-30 px-40 py-4 bg-[#FC8DFD] text-[#FC8DFD] right-0 bottom-0'>h</div>
      <Link to='/'><button class="btn-36 z-40 absolute left-60 top-[27rem]">
        <span class="new">Home</span>
        <div class="old">
          <span>Go Back</span>
          <span aria-hidden>Go Back</span>
        </div>
      </button></Link>
    </div>
  );
};

export default NotFoundPage;