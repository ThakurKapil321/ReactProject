import { car } from "../car.js";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import "../CSS/ViewDetails.css";

import { useContext } from "react";
import { cartContext } from "../Context/carContext.jsx";

import { toast } from "react-toastify";
import {
  FaShoppingBag,
  FaHeart,
  FaHome,
  FaCar,
  FaCalendarAlt,
  FaBox,
  FaQuestionCircle,
  FaCog,
  FaMapMarkerAlt,
  FaStar,
  FaTachometerAlt,
  FaGasPump,
  FaCogs,
  FaShieldAlt,
  FaBluetooth,
  FaSnowflake,
} from "react-icons/fa";

function ViewDetails() {
  const { cart, dispatch } = useContext(cartContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const select = car.find(
    (car) => car.id === Number(id)
  );

  if (!select) {
    return (
      <>
        <Header />

        <div className="details-page">
          <Link to="/" className="back-btn">
            ← Back to Cars
          </Link>

          <div className="not-found">
            <h1>Car Not Found</h1>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  const isAdded = cart.some(
    (item) => item.id === select.id
  );

  const addToCart = () => {
    dispatch({
      type: "ADD",
      product: {
        ...select,
        quantity: 1,
      },
    });

    toast.success(
      `${select.brand} ${select.model} added to cart!`
    );
  };

  return (
    <>
      <Header />

      <main className="details-page">



        {/* ================= MAIN CONTENT ================= */}

        <section className="details-main">

          {/* Top bar */}

          <div className="details-topbar">

            <Link
              to="/"
              className="desktop-back"
            >
              ← Back to Cars
            </Link>

            <div className="top-actions">

              <button>
                ☼
              </button>

              <button>
                ☾
              </button>

              <button>
                ♡
              </button>

            </div>

          </div>

          {/* Car heading */}
          <div className="car-heading">

            <div>

              <p className="details-brand">
                {select.brand}
              </p>

              <h1>
                {select.model}
              </h1>

              <p className="details-year">
                Model Year: {select.year}
              </p>

            </div>

            <button className="heart-button">
              <FaHeart />
            </button>

          </div>


          {/* Price */}

          <div className="details-price">
            ₹{select.price}
          </div>


          {/* Stats */}

          <div className="car-stat-pills">

            <div className="stat-pill">
              <FaStar />
              <span>4.8</span>
            </div>

            <div className="stat-pill">
              <FaTachometerAlt />
              <span>255 HP</span>
            </div>

            <div className="stat-pill">
              <FaGasPump />
              <span>Petrol</span>
            </div>

            <div className="stat-pill">
              <FaCogs />
              <span>Automatic</span>
            </div>

          </div>


          {/* Main grid */}

          <div className="details-grid">


            {/* ================= LEFT ================= */}

            <div className="details-left">


              {/* Car Image */}

              <div className="car-image-card">

                <img
                  src={select.image}
                  alt={`${select.brand} ${select.model}`}
                />

              </div>


              {/* Features */}

              <div className="features-card">

                <h2>
                  Car Features
                </h2>

                <div className="features-grid">


                  <div className="feature-column">

                    <h3>
                      <FaShieldAlt />
                      Safety
                    </h3>

                    <p>
                      Backup camera
                    </p>

                    <p>
                      Tire pressure monitor
                    </p>

                    <p>
                      Blind spot alert
                    </p>

                  </div>


                  <div className="feature-column">

                    <h3>
                      <FaBluetooth />
                      Connectivity
                    </h3>

                    <p>
                      Bluetooth audio
                    </p>

                    <p>
                      Navigation system
                    </p>

                    <p>
                      USB connectivity
                    </p>

                  </div>


                  <div className="feature-column">

                    <h3>
                      <FaSnowflake />
                      Comfort
                    </h3>

                    <p>
                      Air conditioning
                    </p>

                    <p>
                      Adjustable seats
                    </p>

                    <p>
                      Smart key entry
                    </p>

                  </div>

                </div>

              </div>

              {/* Specifications */}

              <div className="specification-card">

                <h2>
                  Specifications
                </h2>

                <div className="specification-grid">

                  <div>
                    <span>Brand</span>
                    <strong>{select.brand}</strong>
                  </div>

                  <div>
                    <span>Model</span>
                    <strong>{select.model}</strong>
                  </div>

                  <div>
                    <span>Year</span>
                    <strong>{select.year}</strong>
                  </div>

                  <div>
                    <span>Type</span>
                    <strong>
                      {select.type || "Car"}
                    </strong>
                  </div>

                </div>

              </div>


            </div>


            {/* ================= RIGHT ================= */}

            <aside className="details-right">


              {/* Purchase card */}

              <div className="purchase-card">

                <h2>
                  Purchase Summary
                </h2>


                <div className="summary-row">

                  <span>
                    Car Price
                  </span>

                  <strong>
                    ₹{select.price}
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Registration
                  </span>

                  <span>
                    Included
                  </span>

                </div>


                <div className="summary-row">

                  <span>
                    Dealer Fee
                  </span>

                  <span>
                    Included
                  </span>

                </div>


                <div className="summary-divider"></div>


                <div className="total-row">

                  <span>
                    Total Price
                  </span>

                  <strong>
                    ₹{select.price}
                  </strong>

                </div>


                {isAdded ? (

                  <button
                    className="purchase-btn"
                    onClick={() =>
                      navigate("/Cart")
                    }
                  >
                    <FaShoppingBag />
                    Go to Cart
                  </button>

                ) : (

                  <button
                    className="purchase-btn"
                    onClick={addToCart}
                  >
                    <FaShoppingBag />
                    Buy Now
                  </button>

                )}


                <button className="contact-btn">
                  Contact Seller
                </button>

              </div>


              {/* Location */}

              <div className="location-card">

                <div className="location-header">

                  <h2>
                    Dealer Location
                  </h2>

                  <button>
                    ↗
                  </button>

                </div>


                <div className="location-map">

                  <FaMapMarkerAlt />

                </div>


                <div className="location-info">

                  <FaMapMarkerAlt />

                  <div>

                    <strong>
                      Premium Auto Dealer
                    </strong>

                    <p>
                      Delhi, India
                    </p>

                  </div>

                </div>

              </div>


              {/* About */}

              <div className="about-card">

                <h2>
                  About This Car
                </h2>

                <p>
                  Experience the perfect combination
                  of style, performance and comfort
                  with the {select.brand}{" "}
                  {select.model}.
                </p>

              </div>


            </aside>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default ViewDetails;
