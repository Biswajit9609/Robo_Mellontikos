import React, { useState } from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      info: "robotics.society@uem.edu.in",
      icon: "📧",
      link: "mailto:robotics.society@uem.edu.in"
    },
    {
      title: "Phone",
      info: "+91 8391903846",
      icon: "📞",
      link: "tel:+91 8391903846"
    },
    {
      title: "Address",
      info: "University of Engineering and Management\nNew Town, Kolkata - 700156\nWest Bengal, India",
      icon: "📍",
      link: "https://www.google.com/maps/search/University+of+Engineering+and+Management+New+Town,+Kolkata"
    },
    {
      title: "Office Hours",
      info: "Monday - Friday: 10:00 AM - 5:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      icon: "🕐"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/robouemk",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rmellontikos/",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/robo-mellontikos/",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "X",
      url: "https://x.com/RMellontikos",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
    }
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "robomellontikos@uem.edu.in",
      description: "For general questions and information about the club"
    },
    {
      name: "Membership",
      email: "membership@robomellontikos.uem.edu.in",
      description: "For joining the club and membership-related queries"
    },
    {
      name: "Events",
      email: "events@robomellontikos.uem.edu.in",
      description: "For event participation, sponsorship, and collaboration"
    },
    {
      name: "Technical Support",
      email: "tech@robomellontikos.uem.edu.in",
      description: "For technical queries and project assistance"
    }
  ];

  // --- Contact Form ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    // --- Frontend-only simulation for now ---
    // In a real application, you would send formData to your backend API here
    console.log("Contact Form Data Submitted:", formData);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success or failure (e.g., 90% chance of success)
    const success = Math.random() > 0.1; 

    if (success) {
      setSubmitMessage('Your message has been sent successfully! We will get back to you soon.');
      setMessageType('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } else {
      setSubmitMessage('Failed to send message. Please try again later.');
      setMessageType('error');
    }
    // --- End of simulation ---

    setIsSubmitting(false);

    // Clear message after some time
    setTimeout(() => {
      setSubmitMessage('');
      setMessageType('');
    }, 5000); // Message disappears after 5 seconds
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-700 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions about our club, want to join, or interested in collaboration? 
            We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') || item.link.startsWith('mailto') || item.link.startsWith('tel') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-white hover:text-primary-600 transition-colors duration-200 whitespace-pre-line"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-white whitespace-pre-line">{item.info}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-white hover:text-primary-600 font-semibold transition-colors duration-200"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Send Us a Message</h2>
          
          {submitMessage && (
            <div className={`p-4 mb-6 rounded-lg text-center ${
              messageType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                placeholder="Inquiry about collaboration"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 resize-y"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-3" // Using your existing btn-primary class
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  Sending... <span className="loading-dots ml-2"></span>
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us at the University of Engineering and Management, Kolkata
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Campus Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">🏫</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">University Campus</h4>
                    <p className="text-gray-600">
                      University of Engineering and Management<br />
                      New Town, Kolkata - 700160<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">🚗</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">How to Reach</h4>
                    <p className="text-gray-600">
                      Our club office is located in the Engineering Block, Room 204. 
                      Easily accessible by public transport and has ample parking space.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">⏰</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Best Time to Visit</h4>
                    <p className="text-gray-600">
                      Monday to Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM (Workshop days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Embedded Google Map */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58945.12380766021!2d88.43069444606658!3d22.57647619786176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1752981256790!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Engineering and Management, Kolkata Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media - MODIFIED SECTION */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest activities, events, and achievements
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {/* Changed from {social.icon} to <img> tag */}
                <img src={social.img_src} alt={`${social.name} logo`} className="w-6 h-6" />
                <span className="font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Whether you're a student, faculty member, or industry professional, 
            we welcome anyone passionate about robotics and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:membership@robomellontikos.uem.edu.in?subject=Membership Inquiry"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply for Membership
            </a>
            <a
              href="mailto:robomellontikos@uem.edu.in?subject=General Inquiry"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              General Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
