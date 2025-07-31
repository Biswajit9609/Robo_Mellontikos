import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Robotics Bootcamp 2024",
      date: "April 15-16, 2024",
      location: "UEM Main Campus",
      description: "Intensive 2-day bootcamp covering fundamentals of robotics, Arduino programming, and sensor integration. Perfect for beginners and intermediate learners.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AI in Robotics Symposium",
      date: "April 22, 2024",
      location: "Auditorium Hall",
      description: "Expert talks on the latest developments in artificial intelligence applications in robotics, featuring industry leaders and research scholars.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/8566446/pexels-photo-8566446.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "National Robotics Championship",
      date: "May 5-7, 2024",
      location: "Delhi, India",
      description: "Competing in the prestigious national championship with our autonomous navigation robot and line-following bot teams.",
      status: "upcoming",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const ongoingEvents = [
    {
      title: "Weekly Arduino Workshop",
      date: "Every Saturday",
      location: "Lab 204",
      description: "Regular hands-on sessions for members to learn and practice Arduino programming, circuit design, and project development.",
      status: "ongoing",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const pastEvents = [
    {
      title: "Robo Dangal",
      description: "Compete in the ultimate bot wrestling showdown and prove your robot's strength.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      image: "./PastEvents/robo-dangal.png",
      status: "completed",
    },
    {
      title: "Robo Sumo",
      description: "Build and compete with autonomous robots in a sumo wrestling match.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      imageUrl: "./PastEvents/robo-sumo.png",
      status: "completed",
    },
    {
      title: "Need for Torque",
      description: "Compete in a high-speed robotic drag race and prove your robot's speed.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      imageUrl: "./PastEvents/need-for-torque.png",
      status: "completed",
    },
    {
      title: "Robo League",
      description: "Compete in a robotic soccer league and showcase your robot's agility and skills.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      imageUrl: "./PastEvents/robo-league.png",
      status: "completed",
    },
    {
      title: "Dirreción",
      description: "Build a line-following robot and compete in this challenging event.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      imageUrl: "./PastEvents/dirrecion.png",
      status: "completed",
    },
    {
      title: "Robo GT",
      description: "Compete in a racing competition for AI-driven robots and showcase your robot's speed and intelligence.",
      date: "1st-2nd March 2025",
      venue: "UEM Kolkata Campus",
      type: "Competition",
      imageUrl: "./PastEvents/robo-gt.png",
      status: "completed",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-700 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & Activities
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our exciting lineup of workshops, competitions, and learning opportunities. 
            Join us in exploring the fascinating world of robotics and technology.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to learn, compete, and network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Events */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ongoing Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular activities and workshops happening throughout the semester
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our successful events and the impact we've made in the robotics community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Participate?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join our mailing list to get notified about upcoming events and exclusive opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:robomellontikos@uem.edu.in?subject=Event Notifications"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Subscribe to Updates
            </a>
            <a
              href="mailto:robomellontikos@uem.edu.in?subject=Event Partnership"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
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