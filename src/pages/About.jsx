import React from "react";

const About = () => {

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in robotics and automation.",
      icon: "🚀",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and shared knowledge to achieve excellence.",
      icon: "👥",
    },
    {
      title: "Learning",
      description:
        "We foster a culture of continuous learning and skill development.",
      icon: "🎓",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do.",
      icon: "⭐",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-700 text-white py-20 px-6 text-center shadow-xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            About Robo Mellontikos
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Pioneering robotics education and innovation at University of Engineering and
            Management Kolkata. Discover our journey, mission, and the impact we're
            making in the world of technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary-900">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To create a vibrant ecosystem of robotics enthusiasts who are passionate about
              innovation, learning, and making a positive impact on society through technology.
              We strive to bridge the gap between theoretical knowledge and practical
              application.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to nurture the next generation of robotics engineers and
              innovators who will shape the future of automation, artificial intelligence, and
              human-robot interaction.
            </p>
          </div>
          <div className="bg-gradient-to-tr from-purple-200 to-purple-100 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be recognized as the leading robotics club in Eastern India, known for our
              innovative projects, successful competitions, and contributions to the robotics
              community. We envision a future where our alumni lead groundbreaking research
              and development in robotics worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 mt-4">
              From humble beginnings to becoming a recognized force in collegiate robotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Students working on robotics project"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="space-y-10">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">2019 - Foundation</h3>
                <p className="text-gray-700">
                  Founded by a group of passionate engineering students with a vision to create a
                  platform for robotics education and innovation at UEM Kolkata.
                </p>
              </div>
              <div className="border-l-4 border-secondary-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">2020-2021 - Growth</h3>
                <p className="text-gray-700">
                  Expanded membership, established our first laboratory, and participated in
                  regional competitions, winning several awards for innovation.
                </p>
              </div>
              <div className="border-l-4 border-accent-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">2022-2024 - Excellence</h3>
                <p className="text-gray-700">
                  Achieved national recognition, published research papers, and established
                  partnerships with industry leaders. Currently leading multiple cutting-edge
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The principles that guide everything we do and shape our club culture
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Looking Ahead</h2>
          <p className="text-xl mb-12 text-gray-200 leading-relaxed">
            We're constantly evolving and pushing boundaries. Our future plans include
            expanding our research capabilities, establishing international partnerships,
            and launching an incubation program for robotics startups. Join us as we shape
            the future of robotics and automation technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-lg">
              <h3 className="text-xl font-bold mb-2">Research Center</h3>
              <p className="text-gray-200">Establishing a dedicated research facility</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-lg">
              <h3 className="text-xl font-bold mb-2">Global Partnerships</h3>
              <p className="text-gray-200">Collaborating with international institutions</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-lg">
              <h3 className="text-xl font-bold mb-2">Startup Incubator</h3>
              <p className="text-gray-200">Supporting robotics entrepreneurship</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;