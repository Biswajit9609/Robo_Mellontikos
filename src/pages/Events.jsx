import dirrecion from './PastEvents/dirrecion.webp';
import needForTorque from './PastEvents/need-for-torque.webp'
import roboDandal from './PastEvents/robo-dangal.webp'
import roboGt from './PastEvents/robo-gt.webp'
import roboLeague from './PastEvents/robo-league.webp'
import roboSumo from './PastEvents/robo-sumo.webp'
import poster from '../assets/images/Recruitment Poster (1).png'
import EventCard from '../components/EventCard'; // Assuming EventCard is styled to be neutral or will adapt

const Events = () => {
  // NOTE: Dates updated to be in the future for logical consistency
  const upcomingEvents = [
    {
      title: "Raspberry pi Bootcamp 2025",
      date: "To Be Announced",
      location: "UEMK Ficci Auditorium",
      description: "Intensive 2-day bootcamp covering fundamentals of raspberry pi, programming, and sensor integration. Perfect for beginners and intermediate learners.",
      status: "upcoming",
      image: "https://lh5.googleusercontent.com/proxy/uPM0FTbEew-CdV8Vm41PhYS38Ye2RwXm-o7zCnsHvrd1ugMxrmNVPNMwQDnPH7k6zXcWwxga8Ko7m7tRJOts52oh5QKPxbzWK7t7L78"
    }
  ];

  const ongoingEvents = [
    {
      title: "🚀 WE ARE RECRUITING | Robo Mellontikos",
      date: "Last Date: 2025.09.15",
      location: null,
      description: "If your heart beats in binary and your mind sparks with innovation, this is your cue. Whether you're a coder, creator, planner, or dreamer, if you’ve got the drive, we’ve got the platform.",
      status: "ongoing",
      image: `${poster}`
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
          <h1 className="glitch-text text-4xl md:text-7xl font-black mb-6" data-text="BROADCASTS">
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
              href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform"
              className="btn-cyber-outline"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;