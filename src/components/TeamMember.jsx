const TeamMember = ({ name, role, image, description, skills }) => {
  return (
    <div className="card p-6 text-center hover-lift interactive-card group">
      <div className="mb-6 relative">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src={image || `https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400`}
            alt={name}
            className="w-full h-full rounded-full object-cover border-4 border-primary-400/30 shadow-lg group-hover:border-primary-400 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
        {name}
      </h3>
      <div className="badge badge-primary mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500/20 group-hover:to-accent-500/20 group-hover:border-primary-400/50 transition-all duration-300">
        {role}
      </div>
      
      <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {skills && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-primary-400">Expertise</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-medium border border-slate-600/50 hover:border-primary-400/50 hover:text-primary-300 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;