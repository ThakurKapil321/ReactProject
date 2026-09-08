import {
  FaHeart,
  FaGasPump,
  FaCog,
  FaTachometerAlt,
  FaShoppingBag,

  FaStar
} from "react-icons/fa";

import { car } from "../car.js";

function CarCards() {
  return (
    <div className="cars-container">

      {car.map((car) => (
        <div className="car-card" key={car._id}>

          {/* ================= IMAGE ================= */}
          <div className="car-image-container">

            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
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


          {/* ================= CARD INFORMATION ================= */}
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
                <span>Diesel</span>
              </div>

              <div className="spec">
                <FaCog />
                <span>Manual</span>
              </div>

              <div className="spec">
                <FaTachometerAlt />
                <span>15 KM/L</span>
              </div>

            </div>


            {/* Price and Buttons */}
            <div className="price-action">

              <div className="price-container">

                <h3>
                  {car.price}
                </h3>

                <p>
                  Ex-Showroom Price
                </p>

              </div>


              <div className="card-buttons">

                <button className="details-btn">
                  View Details
                </button>

                <button className="buy-btn">
                  <FaShoppingBag />
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default CarCards;
