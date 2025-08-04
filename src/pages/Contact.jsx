import React, { useState } from 'react';

const Contact = () => {
  const contactInfo = [
    { title: "Secure Email", info: "robotics.society@uem.edu.in", icon: "[EMAIL]", link: "mailto:robotics.society@uem.edu.in" },
    { title: "Direct Comms", info: "+91 8391903846", icon: "[VOICE]", link: "tel:+918391903846" },
    { title: "HQ Coordinates", info: "UEM, New Town, Kolkata - 700156\nWest Bengal, India", icon: "[LOCATION]", link: "https://www.google.com/maps/search/University+of+Engineering+and+Management+New+Town,+Kolkata" },
    { title: "Active Hours", info: "Mon-Fri: 1000-1700 HRS\nSat: 1000-1600 HRS\nSun: [OFFLINE]", icon: "[CLOCK]" }
  ];

  const departments = [
    { name: "General Inquiries", email: "robomellontikos@uem.edu.in", description: "For general questions and information about the club" },
    { name: "Membership", email: "membership@robomellontikos.uem.edu.in", description: "For joining the club and membership-related queries" },
    { name: "Events", email: "events@robomellontikos.uem.edu.in", description: "For event participation, sponsorship, and collaboration" },
    { name: "Technical Support", email: "tech@robomellontikos.uem.edu.in", description: "For technical queries and project assistance" }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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
    setTimeout(() => {
      setSubmitMessage('');
      setMessageType('');
    }, 5000);
  };

  return (
    <div className="min-h-screen cyber-grid-bg font-body text-gray-300 pt-24">
      {/* Hero Section */}
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

      {/* Contact Information */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-white">Communication Channels</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Multiple secure data-ports to connect with our network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="hud-card p-6 text-center border-secondary">
                <div className="font-mono text-2xl text-primary mb-4 flicker">{item.icon}</div>
                <h3 className="font-heading text-xl text-white mb-3">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200 whitespace-pre-line">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-gray-300 whitespace-pre-line">{item.info}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto grid lg:grid-cols-3 gap-12">
          {/* Department Contacts */}
          <div className="lg:col-span-1">
            <div className="text-center lg:text-left mb-12">
              <h2 className="font-heading text-4xl text-white">Directives</h2>
              <p className="text-xl text-gray-400 mt-4">Route your query to the correct sub-division.</p>
            </div>
            <div className="space-y-6">
              {departments.map((dept, index) => (
                <div key={index} className="hud-card p-4 border-accent">
                  <h3 className="font-heading text-lg text-white mb-2">{dept.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{dept.description}</p>
                  <a href={`mailto:${dept.email}`} className="font-mono text-primary hover:underline break-all">
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 hud-card border-primary p-8">
            <h2 className="font-heading text-3xl text-white mb-8 text-center">Transmit Secure Message</h2>
            {submitMessage && (
              <div className={`p-4 mb-6 text-center font-bold ${
                messageType === 'success' ? 'bg-primary text-black' : 'bg-red-500 text-white'
              }`}>
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

      {/* Location Map */}
      <section className="section-padding px-4">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-white">Syndicate HQ</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Find our physical node at the University of Engineering and Management, Kolkata.</p>
          </div>
          <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58945.12380766021!2d88.43069444606658!3d22.57647619786176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1752981256790!5m2!1sen!2sin"
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
      </section>
    </div>
  );
};

export default Contact;