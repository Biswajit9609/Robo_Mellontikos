import React from "react";
import { useConfig } from '../hooks/useConfig';

const About = () => {
  const { config } = useConfig();

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      {/* Hero Section */}
      <section className="text-center px-4 pb-20">
        <div className="container-max mx-auto">
          <h1 className="glitch-text text-5xl md:text-7xl font-black mb-6" data-text="ARCHIVES">
            ARCHIVES
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Accessing historical logs and core programming for Unit Designation: Robo Mellontikos. Authenticate to proceed.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-heading text-4xl text-white">Core Directive</h2>
            <p className="text-lg">
              To build a self-sustaining syndicate of robotics operatives passionate about system disruption and societal evolution through technology. We bridge the void between abstract theory and hardened, functional hardware.
            </p>
            <p className="text-lg">
              Our prime directive is to upload the next generation of engineers with the skills to master autonomous systems, artificial neural-nets, and direct human-machine interface.
            </p>
          </div>
          <div className="lg:col-span-2 hud-card border-primary p-8">
            <h3 className="font-heading text-2xl text-primary mb-4">[ Projected Endgame ]</h3>
            <p className="text-lg">
              To be the apex robotics syndicate in the Eastern sector, recognized for our bleeding-edge projects and contributions to the global tech underground. We envision a future where our operatives lead the charge in the cybernetic revolution worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Historical Data Log</h2>
            <p className="text-xl text-gray-400 mt-4">
              Chronological records of syndicate operations and key milestones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://res.cloudinary.com/dalvwcywm/image/upload/v1761922104/Untitled_design_20251029_215825_0000_xcjrxj.png"
              alt="Operatives at work"
              className="w-full h-full object-cover shadow-lg border-2 border-accent"
            />
            <div className="space-y-8">
              {config.about.historyLogs.map((log) => (
                <div key={log.id} className={`border-l-4 ${log.color} pl-6`}>
                  <h3 className="font-heading text-xl text-white mb-1">{log.year}</h3>
                  <p>{log.log}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container-max mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Operating Protocols</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            The core principles hardwired into our syndicate's mainframe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.about.operatingProtocols.map((protocol) => (
              <div key={protocol.id} className="hud-card p-6 text-center border-secondary">
                <div className="font-mono text-2xl text-primary mb-4 flicker">{protocol.icon}</div>
                <h3 className="font-heading text-xl text-white mb-2">{protocol.title}</h3>
                <p className="text-gray-400">{protocol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 px-4">
        <div className="container-max mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Future Trajectories</h2>
          <p className="text-xl mb-12 text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Our network is constantly evolving. We are uploading new directives to expand our reach, forge global data-links, and launch a black-site incubator for robotics startups. Jack in and join the revolution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hud-card p-6 border-accent">
              <h3 className="font-heading text-xl text-white mb-2">Black-Site R&D</h3>
              <p className="text-gray-400">Establishing a dedicated off-grid research facility.</p>
            </div>
            <div className="hud-card p-6 border-accent">
              <h3 className="font-heading text-xl text-white mb-2">Global Data-Links</h3>
              <p className="text-gray-400">Collaborating with international syndicates.</p>
            </div>
            <div className="hud-card p-6 border-accent">
              <h3 className="font-heading text-xl text-white mb-2">Project: Chimera</h3>
              <p className="text-gray-400">Our deep-tech startup incubation program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container-max mx-auto text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Ready to Join the Syndicate?</h2>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Be part of the next generation of robotics engineers. Join our network and help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={config.cta.pages.about.primaryCta}
              className="btn-cyber-primary"
            >
              Join Us
            </a>
            <a
              href={config.cta.pages.about.secondaryCta}
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

export default About;