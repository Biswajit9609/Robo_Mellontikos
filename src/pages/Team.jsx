// src/pages/Team.jsx

import React from 'react';
import ProfileCard from '../components/ProfileCard';

const Team = () => {
  // Data cleaned to remove the 'skills' property
  const advisors = [
    {
      name: "Dr. Ayan Chatterjee",
      role: "Faculty Advisor",
      avatarUrl: '../assets/ayan_chatterjee-removebg-preview.png',
      linkedInUrl: "https://www.linkedin.com/in/ayan-chatterjee-85928423/",
      instagramUrl: null,
    },
  ];

  const coreTeam = [
    { name: "Ankush Dutta", title: "President", avatarUrl: "../assets/Ankush_Dutta_2-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/ankush-dutta", instagramUrl: "https://www.instagram.com/example" },
    { name: "Amitabh Daripa", title: "Vice President", avatarUrl: "../assets/Amitabh_Daripa-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/amitabh-daripa-1635a3257/" },
    { name: "Hitesh Mukherjee", title: "Secretary", avatarUrl: "../assets/Hitesh_Mukherjee-removebg-preview 2.png", linkedInUrl: "https://www.linkedin.com/in/hitesh-mukherjee-cse/" },
    { name: "Anusua Ghosh", title: "Treasurer", avatarUrl: "../assets/Anusua_Ghosh_2-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/anusua-ghosh-6b2971237/" },
    { name: "Shubhranshu Ghosh", title: "Student Operation Head", avatarUrl: "../assets/Subhranshu_Ghosh-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/shubhrangshughosh" },
    { name: "Aadrija Mukherjee", title: "Student Operation Head", avatarUrl: "../assets/Aadrija_Mukherjee-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/adrijamukherjee" },
    { name: "Shubhodip Pal", title: "Tech Head", avatarUrl: "../assets/Subhodip_Pal-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/shubhodip/" },
    { name: "Biswajit Chatterjee", title: "Tech Head", avatarUrl: "../assets/Biswajit_Chatterjee-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/biswajit-chatterjee-agggtt/" },
    { name: "Haimanti Chakraborty", title: "Graphics Lead", avatarUrl: "../assets/Haimanti_Chakraborty-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/haimanti-chakroborty" },
    { name: "Aratrika Shome", title: "Content Lead", avatarUrl: "../assets/Aratrika_Shome-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/aratrika-shome-ba25ba267/" },
    { name: "Swastikaa Dutta", title: "Social Media Lead", avatarUrl: "../assets/Swastikaa_Dutta-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/swastikaa-dutta-602b33307/" },
    { name: "Samriddhi Bagchi", title: "Web Development Lead", avatarUrl: "../assets/Samriddhi_Bagchi-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/samriddhibagchi" },
  ];

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      <section className="text-center px-4 pb-20">
        <div className="container-max mx-auto">
          <h1 className="glitch-text text-5xl md:text-7xl font-black mb-6" data-text="AGENT ROSTER">
            AGENT ROSTER
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            The brilliant minds driving innovation and excellence at Robo Mellontikos. Our diverse team brings together expertise from various engineering disciplines.
          </p>
        </div>
      </section>

      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Syndicate Overseers</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Experienced mentors guiding our technical and academic endeavors.
            </p>
          </div>
          <div className="flex justify-center">
            {advisors.map((member) => (
              <ProfileCard
                key={member.name}
                name={member.name}
                title={member.role}
                avatarUrl={member.avatarUrl}
                // 'skills' prop removed
                linkedInUrl={member.linkedInUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Operational Command</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Our dedicated leadership team working tirelessly to advance robotics education and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            {coreTeam.map((member) => (
              <ProfileCard
                key={member.name}
                name={member.name}
                title={member.title}
                avatarUrl={member.avatarUrl}
                // 'skills' prop removed
                linkedInUrl={member.linkedInUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section remains the same */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Initiate Recruitment?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            We're always looking for passionate individuals to contribute to the future of robotics. Whether you're a rookie or a veteran operative, there's a place for you in our syndicate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="hud-card p-6 border-primary">
              <div className="font-mono text-3xl mb-4 text-primary flicker">[ACQUIRE]</div>
              <h3 className="font-heading text-xl text-white mb-2">Learn</h3>
              <p className="text-gray-400">Gain hands-on experience with cutting-edge robotics technology.</p>
            </div>
            <div className="hud-card p-6 border-primary">
              <div className="font-mono text-3xl mb-4 text-primary flicker">[EXECUTE]</div>
              <h3 className="font-heading text-xl text-white mb-2">Compete</h3>
              <p className="text-gray-400">Participate in national and international robotics competitions.</p>
            </div>
            <div className="hud-card p-6 border-primary">
              <div className="font-mono text-3xl mb-4 text-primary flicker">[INITIATE!]</div>
              <h3 className="font-heading text-xl text-white mb-2">Innovate</h3>
              <p className="text-gray-400">Work on projects that push the boundaries of technology.</p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMNft6xNC4cH-_pUtstYttRJASDVH0R5B79LQqV1_gWBzdrQ/viewform"
            className="btn-cyber-primary"
          >
            Apply to Join
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;