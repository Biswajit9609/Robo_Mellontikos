import React, { useState } from 'react';

const Contact = () => {
  const socialChannels = [
    { 
      title: "Instagram", 
      info: "@rmellontikos", 
      link: "https://www.instagram.com/rmellontikos/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.847.038 1.12.049 3.297.049 2.172 0 2.444-.01 3.297-.049.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.718-.891.923-1.417.198-.509.333-1.09.372-1.942.038-.853.049-1.12.049-3.297s-.01-2.444-.049-3.297c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.28-.24-.704-.276-1.485C1.442 10.389 1.434 10.136 1.434 8s.008-2.389.047-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.039 1.096-.047 3.232-.047zM8 4.908a3.092 3.092 0 1 0 0 6.184 3.092 3.092 0 0 0 0-6.184zm0 5.068a1.976 1.976 0 1 1 0-3.952 1.976 1.976 0 0 1 0 3.952zm4.268-5.325a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924z"/>
        </svg>
      )
    },
    { 
      title: "LinkedIn", 
      info: "/robo-mellontikos", 
      link: "https://www.linkedin.com/company/robo-mellontikos-the-official-page-of-the-robotics-club-of-uem-kolkata/posts/?feedView=all",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    { 
      title: "X (Twitter)", 
      info: "@RMellontikos", 
      link: "https://x.com/RMellontikos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-1.78 12.95h1.56c.02-.02.04-.04.05-.06l-6.714-9.084H4.14l7.682 10.56Z"/>
        </svg>
      )
    },
    { 
      title: "Facebook", 
      info: "/robouemk", 
      link: "https://www.facebook.com/robouemk",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      )
    },
  ];

  const departments = [
    { name: "General Inquiries", contact: "Ankush Dutta : 8391903846", description: "For general questions and information about the club" },
    { name: "Membership", contact: "Hitesh Mukherjee : 6291605058", description: "For joining the club and membership-related queries" },
    { name: "Events", contact: "Amitabh Daripa : 8116262946", description: "For event participation, sponsorship, and collaboration" },
    { name: "Technical Support", contact: "Biswajit Chatterjee : 7001641316", description: "For technical queries and project assistance" }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    const success = Math.random() > 0.1;
    if (success) {
      setSubmitMessage('Message transmitted successfully. We will respond via secure channel.');
      setMessageType('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitMessage('Transmission failed. Check connection and retry.');
      setMessageType('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      <section className="text-center px-4 pb-20">
        <div className="container-max mx-auto">
          <h1 className="glitch-text text-5xl md:text-7xl font-black mb-6" data-text="JACK IN">
            JACK IN
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Have questions, want to join the syndicate, or interested in a collaboration? We'd love to hear from you. Open a secure channel using any of the methods below.
          </p>
        </div>
      </section>

      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Network Channels</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Follow our public data streams across the net.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialChannels.map((item) => (
              // MODIFIED: Added flexbox classes to center the content vertically and horizontally
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="hud-card p-6 text-center border-secondary group flex flex-col items-center justify-center">
                <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {item.info}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-4">
        <div className="container-max mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="text-center lg:text-left mb-12">
              <h2 className="font-heading text-4xl text-white">Directives</h2>
              <p className="text-xl text-gray-400 mt-4">Route your query to the correct sub-division.</p>
            </div>
            <div className="space-y-6">
              {departments.map((dept) => {
                const phoneNumber = dept.contact.split(':')[1]?.trim();
                return (
                  <div key={dept.name} className="hud-card p-4 border-accent">
                    <h3 className="font-heading text-lg text-white mb-2">{dept.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{dept.description}</p>
                    <a href={`tel:${phoneNumber}`} className="font-mono text-primary hover:underline break-all">
                      {dept.contact}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2 hud-card border-primary p-8">
            <h2 className="font-heading text-3xl text-white mb-8 text-center">Transmit Secure Message</h2>
            {submitMessage && (
              <div className={`p-4 mb-6 text-center font-bold ${messageType === 'success' ? 'bg-primary text-black' : 'bg-red-500 text-white'}`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="cyber-label block mb-2">Your Callsign</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="cyber-input" placeholder="e.g., Neo" required />
                </div>
                <div>
                  <label htmlFor="email" className="cyber-label block mb-2">Your Secure Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="cyber-input" placeholder="user@domain.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="cyber-label block mb-2">Subject Line</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="cyber-input" placeholder="Inquiry about Project Chimera" required />
              </div>
              <div>
                <label htmlFor="message" className="cyber-label block mb-2">Message Body</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className="cyber-textarea resize-y" placeholder="Encrypting transmission..." required></textarea>
              </div>
              <button type="submit" className="btn-cyber-primary w-full py-3" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    Transmitting...
                    <span className="loading-dots ml-3"><span></span><span></span><span></span></span>
                  </span>
                ) : 'Send Transmission'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-white">Syndicate HQ</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Find our physical node at the University of Engineering and Management, Kolkata.</p>
          </div>
          <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="http://googleusercontent.com/maps/google.com/1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UEM Kolkata Map"
              className="cyber-map"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;