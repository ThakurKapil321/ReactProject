import {
  FaCarSide,
  FaSearch,
  FaShieldAlt,
  FaTags,
  FaUsers,
  FaCheckCircle
} from "react-icons/fa";
import Header from "../Components/Navbar.jsx";

import "../CSS/About_us.css";

function About() {
  return (
    <>
    <Header/>
    <div className="about-page">

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-label">
            ABOUT CARZONE
          </span>

          <h1>
            Find the Car That
            <span> Fits Your Journey.</span>
          </h1>

          <p>
            CarZone is a modern car discovery platform designed to make
            finding, comparing, and choosing your next car simple.
          </p>

        </div>

        <div className="about-hero-car">
          <FaCarSide />
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-intro">

        <div className="about-intro-text">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Your Journey to the
            <span> Perfect Car</span>
          </h2>

          <p>
            Choosing a car can be difficult with so many models,
            features, and prices available. CarZone brings everything
            together in one place so you can explore cars without
            unnecessary complexity.
          </p>

          <p>
            From everyday city cars to powerful SUVs and premium
            vehicles, our goal is to help you discover a car that
            matches your needs and budget.
          </p>

        </div>


        <div className="about-intro-card">

          <FaCarSide />

          <h3>
            Drive With Confidence
          </h3>

          <p>
            Explore cars, check important specifications and compare
            your options before making your decision.
          </p>

        </div>

      </section>


      <section className="why-carzone">

        <div className="section-heading">

          <span className="section-label">
            WHY CARZONE
          </span>

          <h2>
            Everything You Need
          </h2>

          <p>
            We keep the car-buying experience simple and convenient.
          </p>

        </div>


        <div className="about-features">

          <div className="about-feature-card">

            <div className="feature-icon">
              <FaSearch />
            </div>

            <h3>
              Easy Discovery
            </h3>

            <p>
              Browse a wide range of cars and quickly find vehicles
              that match your requirements.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              <FaTags />
            </div>

            <h3>
              Clear Pricing
            </h3>

            <p>
              See vehicle prices clearly so you can compare different
              options within your budget.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              <FaShieldAlt />
            </div>

            <h3>
              Important Details
            </h3>

            <p>
              Check essential information such as fuel type,
              transmission, mileage, seating and safety features.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              <FaUsers />
            </div>

            <h3>
              User Focused
            </h3>

            <p>
              CarZone is designed around making the car discovery
              experience straightforward and convenient.
            </p>

          </div>

        </div>

      </section>

      <section className="how-it-works">

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Find Your Car in 3 Steps
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Explore
            </h3>

            <p>
              Browse available cars and discover models that interest
              you.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Compare
            </h3>

            <p>
              Compare prices, specifications and features to narrow
              down your choices.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Choose
            </h3>

            <p>
              Select the car that best fits your requirements and
              start your next journey.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="stat">
          <FaCarSide />
          <h3>100+</h3>
          <p>Cars Listed</p>
        </div>

        <div className="stat">
          <FaUsers />
          <h3>500+</h3>
          <p>Happy Users</p>
        </div>

        <div className="stat">
          <FaCheckCircle />
          <h3>50+</h3>
          <p>Car Models</p>
        </div>

        <div className="stat">
          <FaShieldAlt />
          <h3>24/7</h3>
          <p>Platform Access</p>
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <h2>
          Ready to Find Your Dream Car?
        </h2>

        <p>
          Explore our collection and discover your next car today.
        </p>

        <a href="/" className="about-cta-btn">
          Explore Cars
        </a>

      </section>

    </div>
    </>
  );
}

export default About;
