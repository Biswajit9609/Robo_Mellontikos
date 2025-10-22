import './ProfileCard.css';

const ProfileCard = ({
  name = "Agent Name",
  title = "Designation",
  avatarUrl,
  linkedInUrl,
  instagramUrl,
}) => {
  // MODIFIED: Split the name into first and last parts
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div className="group profile-card">
      <div className="card-background-pattern" />
      <div className="scan-line" />

      <div className="card-content">
        <div className="avatar-container">
          <img 
            src={avatarUrl} 
            alt={`${name}'s avatar`} 
            className="avatar-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="avatar-fallback"
            style={{
              display: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-deep-purple)',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: 'var(--color-accent)',
              textAlign: 'center'
            }}
          >
            {firstName}<br />avatar
          </div>
        </div>

        <div className="info-container">
          {/* MODIFIED: Render the name on two lines */}
          <h3 className="font-heading text-3xl text-white uppercase tracking-wider leading-tight">
            {firstName}
            {lastName && <br />}
            {lastName}
          </h3>
          <p className="font-body text-primary text-lg mt-1 card-title">{title}</p>
        </div>

        <div className="socials-container">
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram of ${name}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.847.038 1.12.049 3.297.049 2.172 0 2.444-.01 3.297-.049.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.718-.891.923-1.417.198-.509.333-1.09.372-1.942.038-.853.049-1.12.049-3.297s-.01-2.444-.049-3.297c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.28-.24-.704-.276-1.485C1.442 10.389 1.434 10.136 1.434 8s.008-2.389.047-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.039 1.096-.047 3.232-.047zM8 4.908a3.092 3.092 0 1 0 0 6.184 3.092 3.092 0 0 0 0-6.184zm0 5.068a1.976 1.976 0 1 1 0-3.952 1.976 1.976 0 0 1 0 3.952zm4.268-5.325a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924z"/>
              </svg>
            </a>
          )}
          {linkedInUrl && (
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn of ${name}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;