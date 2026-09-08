import "../CSS/Profile.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  // Get user from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
    navigate("/");
  };

  // If user is not logged in
  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile-page">

      {/* Profile Header */}
      <section className="profile-header">

        <div className="profile-avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="profile-title">
          <h1>{user?.name}</h1>
          <p>Welcome back to CarZone</p>
        </div>

        <button className="edit-profile-btn">
          Edit Profile
        </button>

      </section>

      {/* Profile Content */}
      <section className="profile-container">

        {/* Personal Information */}
        <div className="profile-card">

          <div className="card-heading">
            <h2>Personal Information</h2>
          </div>

          <div className="profile-details">

            <div className="detail-item">
              <span className="detail-label">
                Full Name
              </span>

              <span className="detail-value">
                {user?.name}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Email
              </span>

              <span className="detail-value">
                {user?.email}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Phone
              </span>

              <span className="detail-value">
                +91 98765 43210
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Location
              </span>

              <span className="detail-value">
                New Delhi, India
              </span>
            </div>

          </div>
        </div>

        {/* Account Information */}
        <div className="profile-card">

          <div className="card-heading">
            <h2>Account</h2>
          </div>

          <div className="account-options">

            <button className="account-option">
              <span className="option-icon">❤️</span>

              <span>
                <strong>Favourite Cars</strong>
                <small>View your saved cars</small>
              </span>

              <span className="arrow">›</span>
            </button>

            <button className="account-option">
              <span className="option-icon">🛒</span>

              <span>
                <strong>My Enquiries</strong>
                <small>Check your car enquiries</small>
              </span>

              <span className="arrow">›</span>
            </button>

            <button className="account-option">
              <span className="option-icon">⚙️</span>

              <span>
                <strong>Settings</strong>
                <small>Manage your account</small>
              </span>

              <span className="arrow">›</span>
            </button>

          </div>
        </div>

        {/* Favourite Cars */}
        <div className="profile-card favourite-card">

          <div className="card-heading">
            <h2>Favourite Cars</h2>
            <span className="view-all">View All</span>
          </div>

          <div className="empty-favourites">

            <div className="empty-icon">
              ❤️
            </div>

            <h3>No Favourite Cars Yet</h3>

            <p>
              Save your favourite cars and find them easily later.
            </p>

            <button className="browse-btn">
              Browse Cars
            </button>

          </div>
        </div>

        {/* Logout */}
        <div className="logout-section">
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </section>
    </div>
  );
}

export default Profile;
