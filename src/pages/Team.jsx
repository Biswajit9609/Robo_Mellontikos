import React from 'react';
import ProfileCard from '../components/ProfileCard';

// Helper function updated with cyberpunk theme defaults
const getMemberData = (member) => {
  const baseAvatarPath = "../assets/";
  const defaultAvatar = member.avatarUrl || (baseAvatarPath + member.name.toLowerCase().replace(/\s/g, '-') + '.jpg');
  
  // NEW: Cyberpunk-themed default gradients using CSS variables
  const defaultBehindGradient = "linear-gradient(220deg, var(--color-accent) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)";
  const defaultInnerGradient = "linear-gradient(145deg, rgba(38, 1, 36, 0.5) 0%, rgba(113, 13, 115, 0.2) 100%)";
  const defaultIconUrl = "https://www.reactbits.dev/patterns/sparkle.svg"; // This can be replaced with a more thematic icon if desired

  return {
    name: member.name,
    title: member.role || member.title,
    avatarUrl: defaultAvatar,
    miniAvatarUrl: member.miniAvatarUrl || defaultAvatar,
    linkedInUrl: member.linkedInUrl,
    behindGradient: member.behindGradient || defaultBehindGradient,
    innerGradient: member.innerGradient || defaultInnerGradient,
    iconUrl: member.iconUrl || defaultIconUrl,
    description: member.description,
    skills: member.skills,
  };
};

const Team = () => {
  // Data remains the same
  const advisors = [
    {
      name: "Dr. Ayan Chatterjee",
      role: "Faculty Advisor",
      description: "Professor of Electronics Engineering.",
      skills: ["Electronics", "AI", "Research", "Mentoring"],
      avatarUrl: '../assets/ayan_chatterjee-removebg-preview.png',
      behindGradient: "linear-gradient(220deg, var(--color-accent) 0%, var(--color-secondary) 100%)", // Themed gradient
      linkedInUrl: "https://www.linkedin.com/in/ayan-chatterjee-85928423/",
    },
  ];

  const coreTeam = [
    { name: "Ankush Dutta", title: "President", description: "Leading the club's vision and strategy.", skills: ["Leadership", "Robotics", "Project Management"], avatarUrl: "../assets/Ankush_Dutta_2-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/ankush-dutta" },
    { name: "Amitabh Daripa", title: "Vice President", description: "Assisting the president and overseeing operations.", skills: ["Operations", "Strategy", "Automation"], avatarUrl: "../assets/Amitabh_Daripa-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/amitabh-daripa-1635a3257/" },
    { name: "Hitesh Mukherjee", title: "Secretary", description: "Managing club records and communications.", skills: ["Communication", "Documentation", "Event Coordination"], avatarUrl: "../assets/Hitesh_Mukherjee-removebg-preview 2.png", linkedInUrl: "https://www.linkedin.com/in/hitesh-mukherjee-cse/" },
    { name: "Anusua Ghosh", title: "Treasurer", description: "Handling financial planning and budgeting.", skills: ["Finance", "Budgeting", "Resource Management"], avatarUrl: "../assets/Anusua_Ghosh_2-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/anusua-ghosh-6b2971237/" },
    { name: "Shubhranshu Ghosh", title: "Student Operation Head", description: "Overseeing student-led projects and activities.", skills: ["Operations", "Team Management", "Logistics"], avatarUrl: "../assets/Subhranshu_Ghosh-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/shubhrangshughosh" },
    { name: "Aadrija Mukherjee", title: "Student Operation Head", description: "Coordinating student engagement and outreach programs.", skills: ["Outreach", "Student Engagement", "Event Planning"], avatarUrl: "../assets/Aadrija_Mukherjee-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/adrijamukherjee" },
    { name: "Shubhodip Pal", title: "Tech Head", description: "Specializing in software development for robotics applications.", skills: ["Software Development", "AI/ML", "Embedded Systems"], avatarUrl: "../assets/Subhodip_Pal-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/shubhodip/" },
    { name: "Biswajit Chatterjee", title: "Tech Head", description: "Leading technical development and research initiatives.", skills: ["Robotics", "Programming", "Hardware Design"], avatarUrl: "../assets/Biswajit_Chatterjee-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/biswajit-chatterjee-agggtt/" },
    { name: "Haimanti Chakraborty", title: "Graphics Lead", description: "Designing visual content and branding materials.", skills: ["Graphic Design", "UI/UX", "Branding"], avatarUrl: "../assets/Haimanti_Chakraborty-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/haimanti-chakroborty" },
    { name: "Aratrika Shome", title: "Content Lead", description: "Creating engaging content for various platforms.", skills: ["Content Writing", "Editing", "Storytelling"], avatarUrl: "../assets/Aratrika_Shome-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/aratrika-shome-ba25ba267/" },
    { name: "Swastikaa Dutta", title: "Social Media Lead", description: "Managing our online presence and community engagement.", skills: ["Social Media Marketing", "Community Management"], avatarUrl: "../assets/Swastikaa_Dutta-removebg-preview2.png", linkedInUrl: "https://www.linkedin.com/in/swastikaa-dutta-602b33307/" },
    { name: "Samriddhi Bagchi", title: "Web Development Lead", description: "Developing and maintaining the club's website and web tools.", skills: ["Web Development", "Frontend", "Backend"], avatarUrl: "../assets/Samriddhi_Bagchi-removebg-preview.png", linkedInUrl: "https://www.linkedin.com/in/samriddhibagchi" },
  ];

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      {/* Hero Section */}
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

      {/* Faculty Advisors */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Syndicate Overseers</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Experienced mentors guiding our technical and academic endeavors.
            </p>
          </div>
          <div className="flex justify-center">
            {advisors.map((advisor, index) => (
              <ProfileCard 
                key={index} 
                {...getMemberData(advisor)}
                enableTilt={true}
                showUserInfo={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Operational Command</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Our dedicated leadership team working tirelessly to advance robotics education and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            {coreTeam.map((member, index) => (
              <ProfileCard 
                key={index} 
                {...getMemberData(member)}
                enableTilt={true}
                showUserInfo={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
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
            href="mailto:robomellontikos@uem.edu.in"
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