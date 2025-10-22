import EventCard from '../components/EventCard';
import { useConfig } from '../hooks/useConfig';

const Events = () => {
  const { config } = useConfig();

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
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
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
        events={config.events.upcomingEvents}
      />

      {/* Ongoing Events */}
      <EventSection
        title="Active Protocols"
        description="Regular activities and workshops happening throughout the semester."
        events={config.events.ongoingEvents}
      />

      {/* Past Events */}
      <EventSection
        title="Archived Logs"
        description="A showcase of our successful events and the impact we've made in the robotics community."
        events={config.events.pastEvents}
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
              href={config.cta.pages.events.primaryCta}
              className="btn-cyber-primary"
            >
              Join Us
            </a>
            <a
              href={config.cta.pages.events.secondaryCta}
              className="btn-cyber-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;