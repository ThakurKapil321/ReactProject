import { Link } from "react-router-dom";
import { FaCarSide, FaHome, FaSearch } from "react-icons/fa";

import "../CSS/pageNotfound.css";

function PageNotFound() {
  return (
    <div className="not-found-page">

      <div className="not-found-content">

        {/* Car icon */}
        <div className="not-found-car">
          <FaCarSide />
        </div>

        {/* 404 */}
        <h1>404</h1>

        <h2>Oops! This road doesn't exist.</h2>

        <p>
          The page you're looking for may have been moved,
          deleted, or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="not-found-buttons">

          <Link to="/" className="home-btn">
            <FaHome />
            Back to Home
          </Link>

          <Link to="/cars" className="cars-btn">
            <FaSearch />
            Explore Cars
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PageNotFound;
