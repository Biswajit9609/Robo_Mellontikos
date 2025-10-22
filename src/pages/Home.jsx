import { useEffect, useRef, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import rmLogo from '../components/RM white.png';
import { useConfig } from '../hooks/useConfig';

// --- Reusable Components (Memoized for performance) ---

const Section = memo(({ className, children }) => (
  <section className={`relative section-padding py-20 ${className}`}>
    <div className="container-max mx-auto">
      {children}
    </div>
  </section>
));

const SectionHeader = memo(({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">{title}</h2>
    <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
  </div>
));

const CtaButtons = memo(({ config }) => (
  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <a href={config.cta.pages.home.primaryCta} className="btn-cyber-primary">Join Us</a>
    <a href={config.cta.pages.home.secondaryCta} className="btn-cyber-outline">Explore Our Work</a>
  </div>
));

// --- Main Page Sections (Memoized for performance) ---

const HeroSection = memo(({ isLoading, config }) => {
  const heroContainerRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.2 })
        .from(".animate-text", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2
        });
    }, heroContainerRef);
    
    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section ref={heroContainerRef} className="relative min-h-screen flex items-center justify-center p-4 bg-[#0d0d0d]" style={{contain: 'layout style paint'}}>
      {/* Mobile-only content */}
      <div className="relative z-10 flex flex-col items-center text-center lg:hidden">
        <div className="mobile-hero-logo w-32 h-32 rounded-full flex items-center justify-center mb-8 bg-black">
          <img src={rmLogo} alt="RoboMellontikos Logo" className="w-24 h-24" />
        </div>
        <h1 className="glitch-text text-5xl font-black mb-4" data-text="Robo Mellontikos">
          Robo Mellontikos
        </h1>
        <p className="font-heading text-lg tracking-widest text-gray-400 mb-10">
          ENGINEERING THE FUTURE
        </p>
        <CtaButtons config={config} />
      </div>

      {/* Desktop-only content */}
      <div className='hidden lg:block p-0 m-0 z-20 absolute top-[30%] right-[6rem] px-10' style={{willChange: 'transform'}}>
        <h1 className='text-[5rem] animate-text sddystopfont tracking-widest' style={{willChange: 'transform'}}>Welcome to</h1>
        <span className='m-0 p-0 superFont text-[5rem] tracking-widest block text-[#710D73] animate-text' style={{willChange: 'transform'}}>
          Robo <span className='block leading-3 mb-10'>Mellontikos</span>
        </span>
        <h3 className='text-[1.6rem] absolute animate-text tracking-widest roboto' style={{willChange: 'transform'}}>
          <span>The official robotics club of UEM Kolkata</span>
        </h3>
      </div>
      
      {/* Desktop Spline iFrame with fallback */}
      {!isLoading && (
        <>
          {!iframeLoaded && (
            <div className='hidden lg:block h-[100dvh] z-10 absolute -left-80 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] animate-pulse' />
          )}
          <iframe
            loading='lazy'
            className='hidden lg:block h-[100dvh] z-10 absolute -left-80'
            src='https://my.spline.design/nexbotrobotcharacterconcept-hIDyk2EKPE6riHUt2qyVDAZp/'
            style={{border: 'none'}}
            width='100%'
            height='100%'
            title="Spline 3D Robot"
            onLoad={() => setIframeLoaded(true)}
            onError={() => setIframeLoaded(true)}
          />
        </>
      )}
       <div className='hidden lg:block z-30 absolute px-20 py-5 bg-[#0d0d0d] bottom-0 right-[21rem] text-[#0d0d0d]'>h</div>
    </section>
  );
});

const FeaturesSection = memo(({ config }) => (
  <Section>
    <SectionHeader 
      title="Core Directives"
      subtitle="Our primary operational parameters focus on these high-impact domains."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {config.home.features.map((feature) => (
        <div key={feature.id} className={`hud-card p-8 text-center ${feature.colorClass}`}>
          <h3 className="text-2xl font-heading text-white mb-4">{feature.title}</h3>
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </Section>
));

const EventsSection = memo(({ config }) => {
  const upcomingEvents = config.events.ongoingEvents.concat(config.events.upcomingEvents);
  
  return (
    <Section>
      <SectionHeader 
        title="Broadcast Schedule"
        subtitle="Tune in. Log on. Don't miss these upcoming transmissions."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div key={event.id} className="hud-card p-6 border-secondary flex flex-col">
              <div className="flex justify-between items-center mb-3 font-mono text-sm">
                <span className="font-bold text-primary">{event.status.toUpperCase()}</span>
                <span className="text-gray-400">{event.date}</span>
              </div>
              <h3 className="text-xl font-heading text-white mb-3">{event.title}</h3>
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
    </Section>
  );
});

const CtaSection = memo(({ config }) => (
  <Section className="py-24">
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black mb-6">
        <span className="glitch-text" data-text="Ready to Jack In?">Ready to Jack In?</span>
      </h2>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        The future isn't written. It's built. Join our syndicate and help us solder the circuits of tomorrow.
      </p>
      <CtaButtons config={config} />
    </div>
  </Section>
));

// --- Main Home Component ---

const Home = ({ isLoading }) => {
  const { config } = useConfig();

  return (
    <div className="min-h-screen cyber-grid-bg overflow-hidden">
      <HeroSection isLoading={isLoading} config={config} />
      <FeaturesSection config={config} />
      <EventsSection config={config} />
      <CtaSection config={config} />
    </div>
  );
};

export default Home;