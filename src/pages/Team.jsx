import ProfileCard from '../components/ProfileCard';
import { useConfig } from '../hooks/useConfig';

const Team = () => {
  const { config } = useConfig();

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
            {config.team.advisors.map((member) => (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.title}
                avatarUrl={member.avatarUrl}
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
            {config.team.coreTeam.map((member) => (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.title}
                avatarUrl={member.avatarUrl}
                linkedInUrl={member.linkedInUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>

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
            href={config.cta.pages.team.primaryCta}
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