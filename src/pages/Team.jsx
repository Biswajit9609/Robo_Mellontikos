import React from 'react';
import ProfileCard from '../components/ProfileCard'; // Corrected import path and component name

// Helper function for placeholder avatars and gradients
const getMemberData = (member) => {
  const baseAvatarPath = "../assets/"; 
  const defaultAvatar = member.avatarUrl || (baseAvatarPath + member.name.toLowerCase().replace(/\s/g, '-') + '.jpg'); 
  const defaultBehindGradient = "linear-gradient(220deg, #f97316 0%, #d946ef 50%, #0ea5e9 100%)";
  const defaultInnerGradient = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";
  const defaultIconUrl = "https://www.reactbits.dev/patterns/sparkle.svg";

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
  // Advisers
  const advisors = [
    {
      name: "Dr. Ayan Chatterjee",
      role: "Faculty Advisor",
      description: "Professor of Electronics Engineering.",
      skills: ["Electronics", "AI", "Research", "Mentoring"],
      avatarUrl: '../assets/ayan_chatterjee-removebg-preview.png',
      behindGradient: "linear-gradient(220deg, #4f46e5 0%, #8b5cf6 50%, #ec4899 100%)",
      linkedInUrl: "https://www.linkedin.com/in/ayan-chatterjee-85928423/", // Example LinkedIn URL
    },
  ];

  // Core Team Members
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

  // Removed handleContactClick function as it's no longer needed

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-700 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            The brilliant minds driving innovation and excellence at Robo Mellontikos. 
            Our diverse team brings together expertise from various engineering disciplines.
          </p>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faculty Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced mentors guiding our technical and academic endeavors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8 justify-items-center">
            {advisors.map((advisor, index) => (
              <ProfileCard 
                key={index} 
                {...getMemberData(advisor)}
                // Removed onContactClick prop
                enableTilt={true}
                showUserInfo={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated leadership team working tirelessly to advance robotics education and innovation
            </p>
          </div>
          {/* Grid for core team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreTeam.map((member, index) => (
              <ProfileCard 
                key={index} 
                {...getMemberData(member)}
                // Removed onContactClick prop
                enableTilt={true}
                showUserInfo={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate individuals who want to contribute to the future of robotics. 
            Whether you're a beginner or an expert, there's a place for you in our team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-600">Gain hands-on experience with cutting-edge robotics technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compete</h3>
              <p className="text-gray-600">Participate in national and international robotics competitions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovate</h3>
              <p className="text-gray-600">Work on projects that push the boundaries of technology</p>
            </div>
          </div>
          <a
            href="mailto:robomellontikos@uem.edu.in"
            className="btn-primary"
          >
            Apply to Join
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
