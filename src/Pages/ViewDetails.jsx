import { car } from "../car.js";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import "../CSS/ViewDetails.css";

import { useContext } from "react";
import { cartContext } from "../Context/carContext.jsx";

import { toast } from "react-toastify";
import { FaShoppingBag } from "react-icons/fa";

function ViewDetails() {
  const { cart, dispatch } = useContext(cartContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const select = car.find(
    (car) => car.id === Number(id)
  )
  if (!select) {
    return (
      <>
        <Header />

        <div className="details-page">

          <Link to="/" className="back-btn">
            Back to Cars
          </Link>

          <div className="details-container">
            <div className="details-info">
              <h1>Data not found</h1>
            </div>
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

        {/* Back Button */}
        <Link to="/" className="back-btn">
          Back to Cars
        </Link>

        {/* Main Details */}
        <div className="details-container">

          {/* Car Image */}
          <div className="details-image-container">

            <img
              src={select.image}
              alt={`${select.brand} ${select.model}`}
              className="details-image"
            />

          </div>

          {/* Car Information */}
          <div className="details-info">

            {/* Brand */}
            <div className="details-brand">
              {select.brand}
            </div>

            {/* Model */}
            <h1 className="details-name">
              {select.model}
            </h1>

            {/* Year */}
            <p className="details-year">
              Model Year: {select.year}
            </p>

            {/* Price */}
            <div className="details-price">
              ₹{select.price}
            </div>

            {/* Specifications */}
            <div className="car-specs">

              <div className="spec-box">
                <span className="spec-title">
                  Brand
                </span>

                <span className="spec-value">
                  {select.brand}
                </span>
              </div>

              <div className="spec-box">
                <span className="spec-title">
                  Model
                </span>

                <span className="spec-value">
                  {select.model}
                </span>
              </div>

              <div className="spec-box">
                <span className="spec-title">
                  Year
                </span>

                <span className="spec-value">
                  {select.year}
                </span>
              </div>

              <div className="spec-box">
                <span className="spec-title">
                  Type
                </span>

                <span className="spec-value">
                  {select.type || "Car"}
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="details-buttons">

              {isAdded ? (

                <button
                  className="buy-btn"
                  onClick={() => navigate("/Cart")}
                >
                  <FaShoppingBag />
                  Added to Cart
                </button>

              ) : (

                <button
                  className="buy-btn"
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

          </div>

        </div>

        {/* Description */}
        <div className="details-description">

          <h2>
            About This Car
          </h2>

          <p>
            Experience the perfect combination of style,
            performance and comfort with the{" "}
            {select.brand} {select.model}.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default ViewDetails;