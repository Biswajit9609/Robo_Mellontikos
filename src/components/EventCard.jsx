const EventCard = ({ title, date, description, image, status, location }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return 'badge-info';
      case 'ongoing':
        return 'badge-success';
      case 'completed':
        return 'badge-primary';
      default:
        return 'badge-primary';
    }
  };

  const getStatusGradient = (status) => {
    switch (status) {
      case 'upcoming':
        return 'from-secondary-500 to-secondary-600';
      case 'ongoing':
        return 'from-success-500 to-success-600';
      case 'completed':
        return 'from-accent-500 to-accent-600';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <div className="card overflow-hidden hover-lift interactive-card group">
      {/* Apply the scaling transform to this parent div */}
      <div className="relative group-hover:scale-110 transition-transform duration-500"> {/* MODIFIED LINE */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover" // Removed group-hover:scale-110 from here
        />
        {/* The absolute overlay will now scale with its parent */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`badge ${getStatusBadge(status)} capitalize pulse-glow`}>
            {status}
          </span>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getStatusGradient(status)}`}></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-400 mb-2 group-hover:text-primary-300 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">{date}</span>
        </div>
        
        {location && (
          <div className="flex items-center text-gray-400 mb-4 group-hover:text-primary-300 transition-colors duration-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
        )}
        
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;