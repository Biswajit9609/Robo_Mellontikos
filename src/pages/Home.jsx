import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const stats = [
    {
      number: "50+",
      label: "Active Members",
      description: "Passionate students and researchers",
      icon: "👥"
    },
    {
      number: "5+",
      label: "Projects Completed",
      description: "Innovative robotics solutions",
      icon: "🚀"
    },
    {
      number: "5+",
      label: "Years of Excellence",
      description: "Building the future of robotics",
      icon: "⭐"
    }
  ];

  const features = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge research in artificial intelligence, neural networks, and autonomous decision-making systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-primary-500 to-primary-600"
    },
    {
      title: "Autonomous Systems",
      description: "Developing self-navigating robots, drones, and vehicles with advanced sensor integration and real-time processing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-accent-500 to-accent-600"
    },
    {
      title: "IoT Integration",
      description: "Connecting robotics with Internet of Things, creating smart environments and interconnected systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      gradient: "from-success-500 to-success-600"
    }
  ];

  const recentEvents = [
   
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center aurora-bg">
        <div className="absolute inset-0 morphing-bg"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-full floating blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent-500/30 to-accent-600/30 rounded-full floating blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-success-500/30 to-success-600/30 rounded-full floating blur-xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 left-1/2 w-24 h-24 bg-gradient-to-br from-secondary-500/30 to-secondary-600/30 rounded-full floating blur-xl" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container-max section-padding pt-32 pb-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="mb-8">
                <span className="badge badge-primary pulse-glow">
                  🤖 Official Robotics Club
                </span>
              </div>
              
              <h1 className="heading-xl mb-8 text-balance">
                <span className="text-white">Robo</span>
                <span className="block text-gradient neon-text">Mellontikos</span>
              </h1>
              
              <p className="prose-lg mb-10 max-w-2xl">
                The official robotics club of University of Engineering and Management Kolkata. 
                We're building the future through innovation, research, and cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/about" className="btn-primary">
                  Discover Our Mission
                </Link>
                <Link to="/team" className="btn-outline">
                  Meet Our Team
                </Link>
              </div>
              
              {/* Social proof */}
              <div className="mt-12 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-gray-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">25+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-gray-400">Awards</div>
                </div>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <div className="relative glow-effect">
                <img
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Advanced Robotics Technology"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating tech badges */}
                <div className="absolute -top-4 -left-4 badge badge-info floating">
                  AI Powered
                </div>
                <div className="absolute -bottom-4 -right-4 badge badge-success floating" style={{animationDelay: '1s'}}>
                  Autonomous
                </div>
                <div className="absolute top-1/2 -left-6 badge badge-warning floating" style={{animationDelay: '2s'}}>
                  IoT Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative glass-effect section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto justify-items-center max-w-4xl"> {/* MODIFIED LINE */}
            {stats.map((stat, index) => (
              <div key={index} className={`text-center fade-in-up stagger-${index + 1} hover-lift`}>
                <div className="text-4xl mb-4 floating" style={{animationDelay: `${index * 0.7}s`}}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 pulse-glow">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative section-padding bg-mesh">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-white mb-6">What We Specialize In</h2>
            <div className="divider"></div>
            <p className="prose-lg max-w-3xl mx-auto">
              We focus on advancing robotics education, research, and practical applications 
              through hands-on projects and industry collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`card p-8 text-center hover-lift interactive-card fade-in-up stagger-${index + 1}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow floating`} style={{animationDelay: `${index * 0.7}s`}}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-gradient-alt">
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

      {/* About Preview */}
      <section className="relative section-padding glass-effect">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="heading-lg text-white mb-6">
                Building Tomorrow's Engineers
              </h2>
              <p className="prose-lg mb-6">
                Robo Mellontikos is more than just a robotics club. We're a community of 
                passionate engineers, researchers, and innovators working together to push 
                the boundaries of what's possible in robotics and automation.
              </p>
              <p className="prose-lg mb-8">
                Our members gain hands-on experience with cutting-edge technology while 
                developing the skills needed for tomorrow's challenges in autonomous systems, 
                artificial intelligence, and advanced manufacturing.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
            
            <div className="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Students collaborating"
                    className="w-full h-48 object-cover rounded-xl shadow-lg hover-lift glow-effect"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Computer_Circuit_Board_MOD_45153624.jpg/1280px-Computer_Circuit_Board_MOD_45153624.jpg"
                    alt="AI Technology"
                    className="w-full h-32 object-cover rounded-xl shadow-lg hover-lift glow-effect"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Robot design"
                    className="w-full h-32 object-cover rounded-xl shadow-lg hover-lift glow-effect"
                  />
                  <img
                    src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Engineering components"
                    className="w-full h-48 object-cover rounded-xl shadow-lg hover-lift glow-effect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="relative section-padding aurora-bg">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-white mb-6">Upcoming Events</h2>
            <div className="divider"></div>
            <p className="prose-lg max-w-3xl mx-auto">
              Stay updated with our latest workshops, competitions, and research presentations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <div key={index} className={`card p-6 hover-lift interactive-card fade-in-up stagger-${index + 1}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-info pulse-glow">
                    {event.status}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-gradient-alt">
                  {event.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className={`w-full h-1 bg-gradient-to-r ${event.gradient} rounded-full pulse-glow`}></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding glass-effect">
        <div className="container-max text-center">
          <h2 className="heading-lg text-white mb-6 text-gradient-alt">
            Ready to Shape the Future?
          </h2>
          <p className="prose-lg mb-10 max-w-3xl mx-auto">
            Join our community of innovators and help build the next generation of robotics technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Join Our Club
            </Link>
            <Link to="/events" className="btn-outline">
              Attend an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;