import './NotFoundPage.css'
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // We'll create this file next

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="noise-layer"></div>
      <div className="content-wrapper">
        <div className="glitch-404" data-text="404">404</div>
        <p className="subtitle-text">
          <span className="bracket">[</span>
          CONNECTION TERMINATED
          <span className="bracket">]</span>
        </p>
        <p className="description-text mb-20">
          You've strayed into an uncharted sector of the net. The data stream you're looking for is either corrupted, has been moved, or never existed. Re-route to a secure connection.
        </p>
        <Link to="/" className="btn-cyber-primary">
          RETURN TO HOMEBASE
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;