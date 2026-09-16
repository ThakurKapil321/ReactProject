import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { cartContext } from "../Context/carContext.jsx";
import { toast } from "react-toastify";
import "../CSS/Checkout.css";
function formatPrice(price) {
  const crores = price/10000000;
  const lakhs = price/100000;
  if (crores >=1) {
    return `₹${parseFloat(crores.toFixed(2))}
    Crore`;
  }
  return `₹${parseFloat(lakhs.toFixed(2))} Lakh`;
}

function Checkout() {
  const { cart, dispatch } = useContext(cartContext);

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Calculate total
  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  // Total cars
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully! 🎉");

    // Remove all products from cart
    cart.forEach((item) => {
      dispatch({
        type: "DELETE_CART",
        id: item.id,
      });
    });

    // Go back home after order
    setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <>
        <Header />

        <div className="checkout-empty">
          <h1>Your Cart is Empty 🛒</h1>

          <p>
            Please add a car to your cart before
            proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/")}
          >
            Browse Cars
          </button>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="checkout-page">

        <h1 className="checkout-title">
          Checkout
        </h1>

        <div className="checkout-container">

          {/* LEFT SIDE */}
          <div className="checkout-left">

            {/* Customer Information */}
            <section className="checkout-box">

              <h2>Customer Information</h2>

              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

            </section>


            {/* Delivery Address */}
            <section className="checkout-box">

              <h2>Delivery Address</h2>

              <div className="form-group">

                <label>Address</label>

                <textarea
                  name="address"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <div className="form-grid">

                <div className="form-group">

                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>PIN Code</label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter PIN code"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </section>


            {/* Payment */}
            <section className="checkout-box">

              <h2>Payment Method</h2>

              <div className="payment-options">

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span>💳 Credit / Debit Card</span>

                </label>


                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span>📱 UPI</span>

                </label>


                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span>💵 Cash on Delivery</span>

                </label>

              </div>

            </section>

          </div>


          {/* RIGHT SIDE */}
          <div className="checkout-right">

            <section className="order-summary">

              <h2>Order Summary</h2>

              {/* Products */}
              <div className="checkout-products">

                {cart.map((item) => (

                  <div
                    className="checkout-product"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.model}`}
                    />

                    <div className="checkout-product-info">

                      <h3>
                        {item.brand} {item.model}
                      </h3>

                      <p>
                        Quantity: {item.quantity}
                      </p>

                      <strong>
                        {formatPrice(item.price)}
                      </strong>

                    </div>

                  </div>

                ))}

              </div>


              {/* Price */}
              <div className="price-details">

                <div>
                  <span>Cars</span>
                  <span>{totalItems}</span>
                </div>

                <div>
                  <span>Subtotal</span>

                  <span>
                    {formatPrice(totalPrice)}
                  </span>
                </div>

              </div>


              <hr />


              {/* Total */}
              <div className="checkout-total">

                <span>Total</span>

                <strong>
                  {formatPrice(totalPrice)}
                </strong>

              </div>


              {/* Place Order */}
              <button
                className="place-order-btn"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>


              {/* Back */}
              <button
                className="back-cart-btn"
                onClick={() => navigate("/Cart")}
              >
                Back to Cart
              </button>

            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Checkout;