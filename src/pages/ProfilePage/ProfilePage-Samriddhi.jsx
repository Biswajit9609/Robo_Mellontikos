import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-800">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-black to-gray-900 text-white py-16 px-4 flex flex-col items-center relative">
        <img
          src="https://via.placeholder.com/120" // Replace with actual image URL
          alt="Profile"
          className="rounded-full w-28 h-28 border-4 border-white object-cover mb-4"
        />
        <h1 className="text-3xl font-bold">Arnabh Sinha</h1>
        <p className="text-sm mt-2">Daphnis Labs, Full stack Developer</p>
        <p className="text-xs text-gray-300">KOLKATA</p>
        {/* Social Icons */}
        <div className="flex mt-4 space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-x-twitter text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">About me</h2>
        <p className="text-gray-600 text-base">
          Debugging code is my favorite hobby.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="border-t py-10 px-6 bg-gray-50 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-2 font-semibold text-lg">
              <img
                src="https://developers.google.com/site-assets/images/home/developers-social-media.png"
                alt="GDG"
                className="w-6 h-6"
              />
              <span>Google Developer Groups</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About GDG</a></li>
              <li><a href="#" className="hover:underline">Chapters</a></li>
              <li><a href="#" className="hover:underline">Upcoming Events</a></li>
              <li><a href="#" className="hover:underline">Participation Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium mb-2">Social</h3>
            <div className="flex space-x-4 text-gray-700">
              <a href="#" className="hover:text-black">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-black">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-black">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
