import "../CSS/Contact.css";
import Header from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

function Contact() {
  return (
    <>
    <div className="contact-page">
<Header/>
      <section className="contact-heading">
        <h1>
          Contact <span>CarZone</span>
        </h1>

        <p>
          Have a question, suggestion, or need help finding your dream car?
          Get in touch with us.
        </p>
      </section>


      <section className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p className="contact-description">
            We are here to help you with your car buying journey.
            Feel free to contact us using any of the options below.
          </p>


          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>New Delhi, India</p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>support@carzone.com</p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>


            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
              />
            </div>


            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button type="submit">
              Send Message
            </button>

          </form>
        </div>
 
      </section>
          
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
