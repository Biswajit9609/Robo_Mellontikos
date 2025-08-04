import dirrecion from './PastEvents/dirrecion.webp';
import needForTorque from './PastEvents/need-for-torque.webp'
import roboDandal from './PastEvents/robo-dangal.webp'
import roboGt from './PastEvents/robo-gt.webp'
import roboLeague from './PastEvents/robo-league.webp'
import roboSumo from './PastEvents/robo-sumo.webp'
import EventCard from '../components/EventCard'; // Assuming EventCard is styled to be neutral or will adapt

const Events = () => {
  // NOTE: Dates updated to be in the future for logical consistency
  const upcomingEvents = [
    {
      title: "Robotics Bootcamp 2025",
      date: "September 15-16, 2025",
      location: "UEM Main Campus",
      description: "Intensive 2-day bootcamp covering fundamentals of robotics, Arduino programming, and sensor integration. Perfect for beginners and intermediate learners.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AI in Robotics Symposium",
      date: "October 22, 2025",
      location: "Auditorium Hall",
      description: "Expert talks on the latest developments in artificial intelligence applications in robotics, featuring industry leaders and research scholars.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/8566446/pexels-photo-8566446.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Cybernetic Showdown 2025",
      date: "November 5-7, 2025",
      location: "Sector-5, Salt Lake",
      description: "Competing in the prestigious national championship with our autonomous navigation robot and line-following bot teams.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const ongoingEvents = [
    {
      title: "Weekly Arduino Workshop",
      date: "Every Saturday",
      location: "Data Lab 204",
      description: "Regular hands-on sessions for members to learn and practice Arduino programming, circuit design, and project development.",
      status: "ongoing",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const pastEvents = [
    { title: "Robo Dangal", description: "Compete in the ultimate bot wrestling showdown and prove your robot's strength.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${roboDandal}`, status: "completed" },
    { title: "Robo Sumo", description: "Build and compete with autonomous robots in a sumo wrestling match.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${roboSumo}`, status: "completed" },
    { title: "Need for Torque", description: "Compete in a high-speed robotic drag race and prove your robot's speed.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${needForTorque}`, status: "completed" },
    { title: "Robo League", description: "Compete in a robotic soccer league and showcase your robot's agility and skills.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${roboLeague}`, status: "completed" },
    { title: "Dirreción", description: "Build a line-following robot and compete in this challenging event.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${dirrecion}`, status: "completed" },
    { title: "Robo GT", description: "Compete in a racing competition for AI-driven robots and showcase your robot's speed and intelligence.", date: "1st-2nd March 2025", venue: "UEM Kolkata Campus", type: "Competition", image: `${roboGt}`, status: "completed" },
  ];

  // A helper function to render a section of events
  const EventSection = ({ title, description, events }) => (
    <section className="section-padding px-4">
      <div className="container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-white">{title}</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            // Assuming EventCard is designed to fit a dark theme
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      {/* Hero Section */}
      <section className="text-center px-4 pb-20">
        <div className="container-max mx-auto">
          <h1 className="glitch-text text-5xl md:text-7xl font-black mb-6" data-text="BROADCASTS">
            BROADCASTS
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Discover our exciting lineup of workshops, competitions, and learning opportunities. Join us in exploring the fascinating world of robotics and technology.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <EventSection
        title="Incoming Transmissions"
        description="Don't miss out on these exciting opportunities to learn, compete, and network."
        events={upcomingEvents}
      />

      {/* Ongoing Events */}
      <EventSection
        title="Active Protocols"
        description="Regular activities and workshops happening throughout the semester."
        events={ongoingEvents}
      />

      {/* Past Events */}
      <EventSection
        title="Archived Logs"
        description="A showcase of our successful events and the impact we've made in the robotics community."
        events={pastEvents}
      />

      {/* Call to Action */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto text-center hud-card border-primary p-10">
          <h2 className="font-heading text-4xl text-white mb-6">Want to Participate?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join our mailing list to get notified about upcoming events and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:robomellontikos@uem.edu.in?subject=Event Notifications"
              className="btn-cyber-primary"
            >
              Subscribe to Updates
            </a>
            <a
              href="mailto:robomellontikos@uem.edu.in?subject=Event Partnership"
              className="btn-cyber-outline"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;