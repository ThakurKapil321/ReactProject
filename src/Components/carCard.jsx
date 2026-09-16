
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaGasPump,
  FaCog,
  FaTachometerAlt,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

import { car } from "../car.js";
import { useContext } from "react";
import { cartContext } from "../Context/carContext.jsx";

import { toast } from "react-toastify";
function formatPrice(price) {
  const crores = price/10000000;
  const lakhs = price/100000;
  if (crores >=1) {
    return `₹${parseFloat(crores.toFixed(2))}
    Crore`;
  }
  return `₹${parseFloat(lakhs.toFixed(2))} Lakh`;
}

function CarCards() {
  const { cart, dispatch } = useContext(cartContext);

  const navigate = useNavigate();

  const addToCart = (car) => {
    dispatch({
      type: "ADD",
      product: {
        ...car,
        quantity: 1,
      },
    });
    

    toast.success(`${car.brand} ${car.model} added to cart!`);
  };

  return (
    <div className="cars-container">

      {car.map((car) => {

        // Check if car is already in cart
        const isAdded = cart.some(
          (item) => item.id === car.id
        );

        return (
          <div className="car-card" key={car._id}>

            <div className="car-image-container">

              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                onClick={() =>
                  navigate(`ViewDetails/${car.id}`)
                }
                className="car-card-image"
              />

              {/* Badge */}
              <div className="car-badge">
                <FaStar />
                Featured
              </div>

              {/* Favourite */}
              <button className="favourite-btn">
                <FaHeart />
              </button>

              {/* Image counter */}
              <div className="image-count">
                ▧ 1 / 5
              </div>

            </div>

            {/* Card Information */}
            <div className="car-card-content">

              {/* Car name */}
              <div className="car-title-row">

                <h2>
                  {car.brand} {car.model}
                </h2>

                <span className="car-year">
                  {car.year}
                </span>

              </div>

              {/* Specifications */}
              <div className="car-specs">

                <div className="spec">
                  <FaGasPump />
                  <span>{car.fuelType}</span>
                </div>

                <div className="spec">
                  <FaCog />
                  <span>{car.transmission}</span>
                </div>

                <div className="spec">
                  <FaTachometerAlt />
                  <span>{car.mileage}</span>
                </div>

              </div>

              {/* Price and Buttons */}
              <div className="price-action">

                <div className="price-container">

                  <h3>{formatPrice(car.price)}</h3>

                  <p>
                    Ex-Showroom Price
                  </p>

                </div>

                <div className="card-buttons">

                  <button
                    onClick={() =>
                      navigate(`ViewDetails/${car.id}`)
                    }
                    className="details-btn"
                  >
                    View Details
                  </button>

                  {/* Buy / Added Button */}
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
                      onClick={() => addToCart(car)}
                    >
                      <FaShoppingBag />
                      Buy Now
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default CarCards;
