// src/pages/Home.jsx

import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import rmLogo from '../components/RM white.png'; // Make sure the path to your logo is correct

// The component now accepts the 'isLoading' prop from App.jsx
const Home = ({ isLoading }) => { 
  const features = [
    { title: "AI & Machine Learning", description: "Cutting-edge research in artificial intelligence, neural networks, and autonomous decision-making systems.", colorClass: "border-primary" },
    { title: "Autonomous Systems", description: "Developing self-navigating robots, drones, and vehicles with advanced sensor integration.", colorClass: "border-secondary" },
    { title: "IoT Integration", description: "Connecting robotics with Internet of Things, creating smart environments and interconnected systems.", colorClass: "border-accent" }
  ];
  
  const upcomingEvents = [
    { title: "🚀 WE ARE RECRUITING | Robo Mellontikos", date: "September 15, 2025", description: "If your heart beats in binary and your mind sparks with innovation, this is your cue. Whether you're a coder, creator, planner, or dreamer, if you’ve got the drive, we’ve got the platform.", status: "REGISTRATION OPEN" },
  ];

  const heroTextContainer = useRef(null);

  useLayoutEffect(() => {
    // This effect will only run when 'isLoading' becomes false
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // The timeline starts after a brief delay, allowing the page to settle
      const tl = gsap.timeline({ delay: 0.5 }); 
      tl.from(".animate-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4
      });
    }, heroTextContainer);
    
    // Cleanup function for when the component unmounts
    return () => ctx.revert();
  }, [isLoading]); // The animation is now dependent on the loading state

  return (
    <div className="min-h-screen cyber-grid-bg overflow-hidden">
      
      {/* ======================================= */}
      {/* == Mobile-Only Hero Section == */}
      {/* ======================================= */}
      <div className="lg:hidden"> {/* This div is hidden on large screens */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4">
          <div className="absolute inset-0 bg-[#0d0d0d]"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mobile-hero-logo w-32 h-32 rounded-full flex items-center justify-center mb-8 bg-black">
              <img src={rmLogo} alt="RoboMellontikos Logo" className="w-24 h-24" />
            </div>

            <h1 className="glitch-text text-5xl font-black mb-4" data-text="Robo Mellontikos">
              Robo Mellontikos
            </h1>
            <p className="font-heading text-lg tracking-widest text-gray-400 mb-10">
              ENGINEERING THE FUTURE
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform" className="btn-cyber-primary">
                Join Us
              </a>
              <Link to="/events" className="btn-cyber-outline">
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ======================================= */}
      {/* == Desktop Hero Section == */}
      {/* ======================================= */}
      <div id="desktop-hero-container"> {/* This wrapper is hidden on mobile via CSS */}
        <section className="relative min-h-screen flex items-center justify-center p-4 bg-[#0d0d0d]">
          <div ref={heroTextContainer} className='p-0 m-0 z-20 absolute top-[30%] right-[6rem] px-10'>
            <h1 className='text-[5rem] animate-text sddystopfont tracking-widest'>Welcome to</h1>
            <span className='m-0 p-0 superFont text-[4rem] tracking-widest block text-[#710D73] animate-text'>Robo <span className='block leading-3 mb-16'>Mellontikos</span></span>
            <h3 className='text-[2rem] absolute animate-text sddystopfont tracking-widest'><span>The official robotics club of UEM Kolkata</span></h3>
          </div>
          
          {/* The Spline iframe is only rendered after loading is finished */}
          {!isLoading && (
            <iframe className='h-[100dvh] z-99 absolute -left-80' src='https://my.spline.design/nexbotrobotcharacterconcept-hIDyk2EKPE6riHUt2qyVDAZp/' frameborder='0' width='100%' height='100%'></iframe>
          )}

          <div className='z-300 absolute px-20 py-5 bg-[#0d0d0d] bottom-0 right-[21rem] text-[#0d0d0d]'>h</div>
        </section>
      </div>

      {/* Features Section */}
      <section className="relative section-padding py-20">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Core Directives</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">Our primary operational parameters focus on these high-impact domains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`hud-card p-8 text-center ${feature.colorClass}`}>
                <h3 className="text-2xl font-heading text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative section-padding py-20">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Broadcast Schedule</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">Tune in. Log on. Don't miss these upcoming transmissions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <div key={index} className="hud-card p-6 border-secondary flex flex-col">
                    <div className="flex justify-between items-center mb-3 font-mono text-sm">
                      <span className="font-bold text-primary">{event.status}</span>
                      <span className="text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-heading text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 flex-grow mb-4">{event.description}</p>
                    <div className="w-full h-1 bg-primary mt-auto flicker"></div>
                  </div>
                ))
             ) : (
                <p className="text-center col-span-3 text-gray-500">--// NO CURRENT BROADCASTS //--</p>
             )}
          </div>
           <div className="text-center mt-12">
            <Link to="/events" className="btn-cyber-outline">
              View All Transmissions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding py-24">
        <div className="container-max mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="glitch-text" data-text="Ready to Jack In?">Ready to Jack In?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            The future isn't written. It's built. Join our syndicate and help us solder the circuits of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform" className="btn-cyber-primary">
              Join Us
            </a>
            <Link to="/events" className="btn-cyber-outline">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;